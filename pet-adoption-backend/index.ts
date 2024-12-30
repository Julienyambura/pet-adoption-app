import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import routes from "../pet-adoption-backend/src/routes"; // Assuming routes.ts exports a single router

config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes); // Assuming routes.ts exports a single router

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Failed to connect to MongoDB:", err));
