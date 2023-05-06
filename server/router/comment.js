const express = require("express");
const router = express.Router();
const Comment = require("../schema/comment");
const Post = require("../schema/post")
router.get("/:postId/comments", async (req, res) => {
    try {
        let commentsId = await Post.findById(req.params.postId).comments;
        let comments = [];
        for (const commentId of commentsId) {
            comments.push(Comment.findById(commentId))
        }

        comments.sort((a, b) => {
            return b.date - a.date
        })

        req.status(200).send(comments);

    }
    catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }
})

router.post("/:postId/api/addComment", async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        const newComment = new Comment({
            content: req.body.content,
            date: req.body.date
        })

        post.comments.push(newComment._id);
        await post.save();
        await newComment.save();

        res.status(201).json({status: 201, message: "Comment created successfully"});


    } catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }
})

router.post("/:commentId/api/like", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (comment.likes.includes(req.body.userId)) {
            comment.likes.pull(req.body.userId);
            await comment.save();
        } else {
            comment.likes.push(req.body.userId);
            await comment.save();
        }
        return res.status(200).json({status:200, message:"like or unlike successfully"});
    } catch (e) {
        return res.status(500).json({status:500, message:e.message});
    }
})