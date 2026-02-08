import mongoose from "mongoose";

const DB_NAME = "auth-keeper";

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
}
