const mongoose = require("mongoose");

const db = require("../db/connection_mongoose");

let Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },

    // comments: [{
    //     type: mongoose.ObjectId,
    // }],

    likes: [{
        type: mongoose.ObjectId,
    }],

    date: {
        type: Date,
        required: true
    }
})

const Comment = db.model("comments", commentSchema);

module.exports = Comment;