import mongoose from "mongoose";

const orderschema = new mongoose.Schema({
  userId: { type: String, required: false, default: null }, // Set default to null for non-users
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: "Processing" },
  date: { type: Date, default: Date.now },
  payment: { type: Boolean, default: false },
});

const ordermodel =
  mongoose.models.order || mongoose.model("order", orderschema);

export default ordermodel;
