const mongoose = require("mongoose");

const db = require("../db/connection_mongoose");

let Schema = mongoose.Schema;

const chatSchema = new Schema({
    sender: {
        type: mongoose.ObjectId,
        required: true
    },

    receiver: {
        type: mongoose.ObjectId,
        required: true
    },

    inbox: [{
        type: mongoose.ObjectId,
        ref: "Message"
    }],

    outbox: [{
        type: mongoose.ObjectId,
        ref: "Message"
    }]
});

const Chat = db.model("chats", chatSchema);

module.exports = Chat;
