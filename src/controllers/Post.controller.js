import Post from "../models/post.model.js";
import { generateOTP } from "../utils/otp.utils.js";

export const getAllPosts = async (req, res) => {
  const posts = await Post.find().populate("reviews");
  res.status(200).json({ allPosts: posts });
};

export const createPost = async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(200).json({ postCreated: post });
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('reviews');
  if (!post) {
    res.status(404).json({ errorMessage: "No such post exists" });
  }
  res.status(200).json({ postDetails: post });
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndUpdate(id, { ...req.body });
  await post.save();
  res.status(200).json({ message: post });
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id);
  res.status(200).json({ message: "Post deleted" });
};
