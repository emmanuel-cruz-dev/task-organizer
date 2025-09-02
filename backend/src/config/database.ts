import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const mongoURI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/todoapp";

    await mongoose.connect(mongoURI);

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

// Connection events handler
mongoose.connection.on("disconnected", () => {
  console.log("📡 MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ Error in MongoDB:", err);
});
