const nodemailer = require("nodemailer");

const host = process.env.NODE_ENV === "production" ? "dvadil.herokuapp.com" : "locahost";
console.log(`HOST = ${host}`);

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: host,
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
    from: "dv.nodemailer@gmail.com",
    to: process.env.SEND_TO,
    subject: "EMAIL FROM YOUR PORTFOLIO SITE",
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      console.log("Nodemailer error");
      return res.status(500).end();
    }

    console.log(info);
    console.log("Email was sent successfully");
    res.send("OK");
  });
};

module.exports = sendEmail;
