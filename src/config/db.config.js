import mongoose from "mongoose";

//async await allows easy error handling with promises we use.then.then

//27017 default port for mongoose then the databse name
// if database already exists it will use it otherwise it will create 
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,// to avoid deprecation warning
      useNewUrlParser: true, //use New URL Parser to avoid deprecation warning
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
