import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
import connectDB from "./config.js/db.js";
import userRoutes from "./routes/userRoutes.js";

const port = process.env.PORT || 8000;

connectDB(); // Connect to MongoDB
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
