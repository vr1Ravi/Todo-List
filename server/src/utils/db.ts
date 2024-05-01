import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongo_url = process.env.MONGO_URL || "";
export async function connectDb(): Promise<void> {
  await mongoose.connect(mongo_url);
}
