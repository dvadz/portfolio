const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const sendEmail = require("./nodemailer");

const app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/post", (req, res) => {
  console.log("Sending an email");

  const mailOptions = {
    from: "new.noob.board",
    to: "dtvadil@gmail.com",
    subject: req.body.subject,
    text: req.body.message
  };

  sendEmail(mailOptions);
  res.send("OK");
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, function() {
  console.log(`Node Emailer is running on PORT ${PORT}`);
});
