import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(`${process?.env?.MONGO_URL}`, {});
    console.log("Connected to database.");
  } catch (error) {
    console.error(error);
    throw new Error("Error connecting to database.");
  }
};

export default connect;
