import express from "express";
import { generateSlug } from "../middlewares/slugMiddleware.js";
import {
  getProducts,
  getProduct,
  deleteProduct,
  createProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Routes
router.get("/", getProducts); // Get all products
router.get("/:slug", getProduct); // Get a single product by slug
router.post("/", generateSlug, createProduct); // Create a product with slug generation
router.delete("/:id", deleteProduct); // Delete a product by ID

export default router;
