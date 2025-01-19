import express from "express";
import { generateSlug } from "../middlewares/slugMiddleware.js";
import {
  getProducts,
  getProduct,
  deleteProduct,
  createProduct,
} from "../controllers/productController.js";
const router = express.Router();
console.log("you are in admin route");
// Routes
router.get("/products", getProducts); // Get all products
router.get("/products/:slug", getProduct); // Get a single product by slug
router.post("/products", generateSlug, createProduct); // Create a product with slug generation
router.delete("/products/:id", deleteProduct); // Delete a product by ID

export default router;
