const express = require("express");
const router = express.Router();
const Chat = require("../schema/chat");
const Message = require("../schema/message");
const User = require("../schema/user");

//todo faire un test côté client en attente
router.get("/:sender/chat/:receiver", async (req, res) => {
    try {
        const chat = await Chat.find({sender: req.params.sender, receiver: req.params.receiver});
        if (!chat) {
            const newChat = new Chat({
                sender: req.params.sender,
                receiver: req.params.receiver
            })

            const sender = await User.findById(req.params.sender);
            sender.chats.push(newChat);
            await sender.save();
            await newChat.save();

            return res.status(200).json({inbox: newChat.inbox, outbox: newChat.outbox});
        }

        res.status(200).send(chat);
    } catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }
});

//todo some verifies need to be added
router.post("/:sender/chat/:receiver/api/sendMessage", async (req, res) => {
    try {
        const message = new Message({
            content: req.body.content,
            date: req.body.date
        });

        const chat1 = await Chat.find({sender: req.params.sender, receiver: req.params.receiver});
        const chat2 = await Chat.find({sender: req.params.receiver, receiver: req.params.sender});

        chat1.outbox.push(message);
        chat2.inbox.push(message);
        await chat1.save();
        await chat2.save();

        res.status(200);

    } catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }
});

