const express = require("express");
const router = express.Router();
const Post = require("../schema/post");
const User = require("../schema/user");

router.post("/users/:userId/posts", async (req, res) => {
    try {
        const post = new Post({
            post: req.body.post,
            user: req.params.userId,
            date: req.body.date
        })

        await post.save();

        let user = await User.findById(req.params.userId);
        console.log(user);
        newPostId = post._id;
        user.posts.push(newPostId);
        user.save();

        res.status(201).json({status: 201, message: "post created successfully"});
    } catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }
})

router.delete("/users/:userId/posts/:postId/api/deletePost", async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        const user = await User.findById(req.params.userId);
        postId = post._id

        console.log(user._id);
        console.log(post.user);

        if (!user._id.equals(post.user)) {
            return res.status(403).json({status: 403, message: "Can't delete the others' post"});
        }

        await Post.deleteOne((req).postId);
        await user.posts.pull(postId);
        await user.save();
        res.status(200).json({status: 200, message: `Delete Post ${postId} successfully`});
    } catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }
})

router.post("/publicPosts/:postId/api/like/", async (req,res)=>{
    try {
        const post = await Post.findById(req.params.postId);
        if (post.likes.includes(req.body.userId)) {
            post.likes.pull(req.body.userId);
            await post.save();
        } else {
            post.likes.push(req.body.userId);
            await post.save();
        }
        return res.status(200).json({status:200, message:"like or unlike successfully"});
    } catch (e) {
        return res.status(500).json({status:500, message:e.message});
    }
})

router.get("/publicPosts", async (req, res) => {
    try {
        const posts = await Post.aggregate([
            {"$sort" : {"date" : -1}},
            {"$limit": 15}
        ]);

        res.status(201).send(posts)
    } catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }
})

module.exports = router;