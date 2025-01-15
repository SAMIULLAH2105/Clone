import nodemailer from "nodemailer";

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "samiullah21january@gmail.com", // Your Gmail
    pass: "bsnz wmqx tybr fhyb", // Your Gmail password or App password
  },
});

// Controller function to handle sending email
export const sendEmail = (req, res) => {
  const { name, email, whatsappNumber, message } = req.body;

  const mailOptions = {
    from: "samiullah21january@gmail.com",
    to: email,
    subject: "New Contact Form Submission",
    text: `
      You have a new message:
      Name: ${name}
      WhatsApp: ${whatsappNumber}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
};
