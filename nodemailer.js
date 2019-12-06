const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD
  }
});

const sendEmail = (req, res) => {
  // mailOptions must have: "from", "to", "subject", "text"

  const message = `FROM: ${req.body.name} [${req.body.email}]
  SUBJECT: ${req.body.subject}
  MESSAGE: ${req.body.message}`;

  const mailOptions = {
    from: "new.noob.board",
    to: "dtvadil@gmail.com",
    subject: "EMAIL FROM YOUR PORTFOLIO SITE",
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Nodemailer error");
      console.log(error);
      return res.send(error);
    }

    console.log("Email was sent successfully");
    res.send("OK");
  });
};

module.exports = sendEmail;
