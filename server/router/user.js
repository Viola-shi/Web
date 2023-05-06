const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require("../schema/user");

router.post("/api/signup", async (req, res) => {
    try {
        let query = {email: req.body.email};
        const userExists = await User.findOne(query);
        if (userExists) {
            return res.status(400).json({status: 400, message: "Email already registered"});
        }

        if (req.body.password.length < 8) {
            return res.status(403).json({status: 403, message: "Password must have at least 8 characters"})
        }

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        await user.save();
        const id = User.findOne(query)._id;

        res.status(201).json({status: 201, message: "User created successfully", id: id});

    } catch (e) {
        res.status(500).json({status: 500, error: e.message});
    }
});

router.post("/api/login", async (req, res) => {
    try {
        let query = {email: req.body.email};
        const user = await User.findOne(query);
        if (!user) {
            return res.status(403).json({status: 403, message: "Invaild email or password"});
        }

        const validPassword = bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(403).json({status: 403, message: "Invaild email or password"});
        }

        res.status(200).json({status: 200, message: "Login successfully", id: user._id});
    } catch (e) {
        res.status(500).json({status: 500, error: e.message});
    }
});


router.delete("/:userId/api/deleteUser", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(403).json({status: 403, message: "Can't delete the user doesn't exist"});
        }
        await User.deleteOne(user);
        res.status(200).json({status: 200, message: `Delete User ${id} successfully`});
    } catch (e) {
        res.status(500).json({status: 500, error: e.message});
    }
})

router.get("/:userId", async (req, res) => {
    try {
        let result = await User.findById(req.params.userId);
        result = Object.assign({status: 200}, result._doc);

        return res.status(200).json(result);
    } catch (e) {
        return res.status(500).json({status: 500, message: e.message});
    }
})

router.post("/:userId/api/changeInfoName", async (req , res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user){
            return res.status(400).json({status: 400, message:"couldn't find user"});
        }
        user.name = req.body.name;
        await user.save();
        return res.status(200).json( {status: 200, message:"change name successfully"});
    }catch(e){
        return res.status(500).json({status: 500, message: e.message});
    }

})





module.exports = router;

