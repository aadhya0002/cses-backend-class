import { getAllPosts } from "../controllers/Post.controller.js";
import {
  createPost,
  getPost,
  updatePost,
  deletePost,
} from "../controllers/Post.controller.js";
import { postMiddleware } from "../middlewares/Post.middleware.js";
import express from "express";

const postRoutes = express.Router();

postRoutes.get("/", getAllPosts);
postRoutes.post("/", createPost);
postRoutes.get("/:id", getPost);
postRoutes.put("/:id", updatePost);
postRoutes.delete("/:id", deletePost);
export default postRoutes;
