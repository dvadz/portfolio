const API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;

const mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

const sendEmailViaMailgun = (req, res) => {
  const message = `FROM: ${req.body.name} <${req.body.email}>
  SUBJECT: ${req.body.subject}
  MESSAGE: ${req.body.message}`;

  // 'data' must have: "from", "to", "subject", "text"
  const data = {
    from: process.env.SEND_FROM,
    to: process.env.SEND_TO,
    subject: "Message from Daniel's Portfolio site",
    text: message
  };

  mailgun.messages().send(data, (error, body) => {
    if (error) {
      console.log("Mailgun error", error);
      console.log("Mailgun error");
      return res.status(500).end();
    }

    console.log("body =", body);
    console.log("Email was sent successfully");
    res.send("OK");
  });
};

module.exports = sendEmailViaMailgun;
