const express = require("express");
const router = express.Router();
const Chat = require("../schema/chat");
const Message = require("../schema/message");

//todo faire un test côté client en attente
router.get("/:sender/:receiver", async (req, res) => {
    try {
        const chat = await Chat.findOne({sender: req.params.sender, receiver: req.params.receiver});
        console.log(chat)
        if (!chat) {
            console.log("enter creation");
            const newChat1 = new Chat({
                sender: req.params.sender,
                receiver: req.params.receiver
            });

            const newChat2 = new Chat({
                sender: req.params.receiver,
                receiver: req.params.sender
            })

            await newChat1.save();
            await newChat2.save();

            return res.status(200).send(newChat1);
        }

        res.status(200).send(chat);
    } catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }
});

//todo some verifies need to be added
router.post("/:sender/:receiver/api/sendMessage", async (req, res) => {
    try {
        const message = new Message({
            content: req.body.content,
            // date: req.body.date
        });
        await message.save();

        const chat1 = await Chat.findOne({sender: req.params.sender, receiver: req.params.receiver});
        const chat2 = await Chat.findOne({sender: req.params.receiver, receiver: req.params.sender});

        console.log(chat1);
        console.log(chat2);

        chat1.outbox.push(message);
        chat2.inbox.push(message);
        await chat1.save();
        await chat2.save();

        res.status(200).send(chat1);

    } catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }
});

router.get("/:messageId", async (req, res) => {
    try {
        const message = await Message.findById(req.params.messageId);
        
        res.status(200).send(message);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
})

module.exports = router;

