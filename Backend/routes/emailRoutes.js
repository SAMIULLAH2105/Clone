import express from "express";
import { sendEmail } from "../controllers/emailController.js";

const router = express.Router();

// Define the POST route
router.post("/", sendEmail);

export default router;
