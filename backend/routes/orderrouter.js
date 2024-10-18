import express from "express";
import authmiddleware from "../middleware/auth.js";
import {
  listorders,
  placeorder,
  updateStatus,
  userorder,
  verifyorder,
  deleteOrder,
} from "../controllers/ordercontroller.js";

const orderrouter = express.Router();

orderrouter.post("/place", placeorder);
orderrouter.post("/verify", verifyorder);
orderrouter.post("/userorders", authmiddleware, userorder);
orderrouter.get("/list", listorders);
orderrouter.post("/status", updateStatus);
orderrouter.delete("/remove/:id", deleteOrder); // Ensure this matches your frontend call

export default orderrouter;
