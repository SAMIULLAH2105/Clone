const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());  // Allow requests from any origin (adjust if needed)
app.use(bodyParser.json());  // Parse incoming JSON requests

// Configure Nodemailer
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'samiullah21january@gmail.com',  // Your Gmail
    pass: 'bsnz wmqx tybr fhyb',   // Your Gmail password or App password
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, whatsappNumber, message } = req.body;

  const mailOptions = {
    from: 'samiullah21january@gmail.com',  // Sender address
    to: email,  // Recipient email from the form
    subject: 'New Contact Form Submission',
    text: `
      You have a new message:
      Name: ${name}
      WhatsApp: ${whatsappNumber}
      Message: ${message}
    `,
  };
  

  // Send email using nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
