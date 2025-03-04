import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Error in Db connection: ", error);
    // throw error;
    process.exit(1);  // this a method of node which can exit any process with a code number like here we are using code 1 which mean end the process with some failure and code 0 means end the process without any kind of failure..
  }
};


export default connectDB;