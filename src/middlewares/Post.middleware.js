export const postMiddleware = (req, res, next) => {
  console.log("Post Middleware Called", req.body);

  //If you want to block the request, you can return a response here.
  if (req.body.name === "John Doe") {
    return res.status(401).json({ message: "Post Middleware Called" });
  }

  next();
};
