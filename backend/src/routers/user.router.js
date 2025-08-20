import express, { Router } from 'express'
import { register } from "../controllers/user.controller.js";
import multer from "multer";
const upload = multer();

const userRouter = express.Router()
userRouter.post("/register", upload.none(), register);

export default userRouter;