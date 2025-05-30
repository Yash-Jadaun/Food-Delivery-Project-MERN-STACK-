import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://yashjadaun2711:X9Mduj8c5Kv3utKR@cluster0.pdj5dmi.mongodb.net/");
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export { connectDB };
