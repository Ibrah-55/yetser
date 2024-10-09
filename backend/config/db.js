import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose
      .connect("mongodb+srv://jarvis:jarvis1212@cluster0.3afvhft.mongodb.net/Yetser")
      .then(() => console.log("DB Connected"));
}