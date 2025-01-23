import express from "express";

import { wishListProducts } from "../controllers/productController.js";
const router = express.Router();

router.get("/", wishListProducts);
export default router;
