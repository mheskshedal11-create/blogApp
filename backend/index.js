import express from "express";
import cors from "cors";
import userRouter from "./src/routers/user.router.js"
import dotenv from 'dotenv'
import connectDB from "./src/db/connection.js";
const app = express();
dotenv.config()
const PORT = process.env.PORT
connectDB()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/users", userRouter);


app.get("/", (req, res) => {
  res.send("API is running...");
});


app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
