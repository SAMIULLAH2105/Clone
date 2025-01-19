import express from "express";
import { handleUserSubmission } from "../controllers/userController.js";

const router = express.Router();

// POST route for user submissions
router.post("/", handleUserSubmission);

export default router;
