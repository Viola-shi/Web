const express = require("express");
const userRouter = require("../router/user");
const postRouter = require("../router/post");
const friendRouter = require("../router/friend");
const chatRouter = require("../router/chat")
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());

const PORT = 8000;

// app.use('*', (req, res) => {
//   res.set({
//     'Access-Control-Allow-Credentials': true,
//     'Access-Control-Allow-Origin': req.headers.origin || '*',
//     'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
//     'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
//     'Content-Type': 'application/json; charset=utf-8'
//   })});

const corsOption = {
  origin: "*"
};

app.use(cors(corsOption));

app.use("/users", userRouter);
app.use("", postRouter);
app.use("/users", friendRouter);
app.use("/chats", chatRouter)

app.listen(PORT, () => {
  console.log(`server started up on port ${PORT}`);
});

