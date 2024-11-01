import express from "express"
import { createReview,deleteReview } from "../controllers/Review.controller.js";
const reviewRoutes=express.Router({mergeParams: true});

reviewRoutes.post("/",createReview);
reviewRoutes.delete("/:reviewId",deleteReview);

export default reviewRoutes;
