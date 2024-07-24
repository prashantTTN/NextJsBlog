import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: String,
    content: String,
    author: String
  },
  {
    timestamps: true,
  }
);

// console.log('in blog model', mongoose.models.Blog, mongoose.model("Blog", blogSchema));
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
// const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
