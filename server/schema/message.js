const mongoose = require("mongoose");

const db = require("../db/connection_mongoose");

let Schema = mongoose.Schema;

const messageSchema = new Schema({
    content: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    }
});

const Message = db.model("messages", messageSchema);

module.exports = Message;