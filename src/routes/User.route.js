import express from "express";
import { createUser, deleteUser } from "../controllers/User.controller.js";

const userRoutes = express.Router();

userRoutes.post("/", createUser);
userRoutes.delete("/", deleteUser);

export default userRoutes;
