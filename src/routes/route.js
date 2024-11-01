import express from "express";
import postRoutes from "./Post.route.js";
import userRoutes from "./User.route.js";
import reviewRoutes from "./Review.route.js";
// import userRoutes from "./User.route.js";

const routes = express.Router();

routes.use("/post", postRoutes);
// routes.use("/user", userRoutes);
routes.use("/user",userRoutes);
routes.use("/post/:id/reviews",reviewRoutes);

export default routes;
