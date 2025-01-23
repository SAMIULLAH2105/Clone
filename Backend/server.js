// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from "./lib/connectDB.js";
import { syncModels } from "./models/index.js";
import productRouter from "./routes/productRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import userRouter from "./routes/userRoutes.js";
import wishListRouter from "./routes/wishListRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/wishlist", wishListRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
  syncModels();
});
