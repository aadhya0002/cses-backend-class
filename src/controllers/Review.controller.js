import Review from "../models/reviews.model.js";
// import User from "../models/user.model.js";
import Post from "../models/post.model.js";

export const createReview = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if(!post){
    return res.status(404).json({message:"Post not found"});
  }
  const review = new Review(req.body);
  // review.author=
  post.reviews.push(review);
  await review.save();
  await post.save();
  res.status(200).json({ message: review });
};

//The $pull operator is a MongoDB operator that removes elements from an array that match a specified condition.

export const deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;
  await Post.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  res.status(200).json({ message: "review deleted successfully" });
};
