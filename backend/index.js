import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/db/connection.js";
dotenv.config({ silent: true });

const PORT = process.env.PORT | 5000;

const app = express();

connectDB()

app.use(express.json())

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
