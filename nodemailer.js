const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD
  }
});

const sendEmail = (mailOptions, req, res) => {
  // mailOptions must have: "from", "to", "subject", "text"

  console.log("About to send");
  transporter.sendMail(mailOptions, (error, info) => {
    console.log(mailOptions);

    if (error) {
      console.log("nodemailer error");
      return console.log(error);
    }

    console.log("Email sent to " + to);
  });
};

module.exports = sendEmail;
