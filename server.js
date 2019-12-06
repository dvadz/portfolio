const express = require("express");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const sendEmail = require("./nodemailer");

const app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("public"));
}

app.post("/post", (req, res) => {
  console.log("Requested to send an email");
  sendEmail(req, res);
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`Portfolio site is running on PORT ${PORT}`);
});
