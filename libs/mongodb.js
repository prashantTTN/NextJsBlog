import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    // console.log('in connectMongoDB MONGODB_URI===', process.env.MONGODB_URI);
    await mongoose.connect("mongodb+srv://prashantbaliyan:XdNg3i2d2NvrGHnR@cluster0.lp22mzj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
