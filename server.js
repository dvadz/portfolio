const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const sendEmail = require("./nodemailer");

const app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/post", (req, res) => {
  console.log("Requested to send an email");
  sendEmail(req, res);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, function() {
  console.log(`Portfolio site is running on PORT ${PORT}`);
});
