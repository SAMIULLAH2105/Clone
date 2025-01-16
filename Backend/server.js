// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from "./lib/connectDB.js";
import { syncModels } from "./models/index.js"; // Import syncModels from models/index.js
import emailRouter from "./routes/emailRoutes.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/email", emailRouter);
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
  syncModels();
});
