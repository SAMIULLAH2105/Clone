import { User } from "../models/userModel.js";
import nodemailer from "nodemailer";

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "samiullah21january@gmail.com",
    pass: "bsnz wmqx tybr fhyb", // Replace with your Gmail App password
  },
});

export const handleUserSubmission = async (req, res) => {
  const { name, email, whatsappNumber, message } = req.body;

  try {
    // Save user details to the database
    const newUser = await User.create({ name, email, whatsappNumber, message });

    // Send email
    const mailOptions = {
      from: "samiullah21january@gmail.com",
      to: email,
      subject: "Contact Form Submission Received",
      text: `
        Thank you for reaching out, ${name}!
        We have received your message:
        WhatsApp: ${whatsappNumber}
        Message: ${message}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).send("Error sending email.");
      }
      console.log("Email sent: " + info.response);
    });

    res.status(201).json({ message: "User details saved and email sent.", user: newUser });
  } catch (error) {
    console.error("Error handling user submission:", error);
    res.status(500).send("Error handling user submission.");
  }
};
