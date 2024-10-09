import ordermodel from "../models/ordermodel.js";
import usermodel from '../models/usermodel.js';

const placeorder = async (req, res) => {
  try {
    const { items, amount, address, userId } = req.body;

    // Create a new order object, setting userId to null if the user is not logged in
    const neworder = new ordermodel({
      userId: userId || null, // If no userId, set it to null
      items: items,
      amount: amount,
      address: address,
    });

    // Save the order to the database
    const savedOrder = await neworder.save();

    // Optionally clear cart data if the user is logged in
    if (userId) {
      await usermodel.findByIdAndUpdate(userId, { cartData: {} });
    }

    // Return success response
    res.json({
      success: true,
      orderId: savedOrder._id,
      message: "Order placed successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error placing order." });
  }
};

const verifyorder = async (req,res) =>{
    const {orderId,success} = req.body;
    try {
        if(success=="true"){
            await ordermodel.findByIdAndUpdate(orderId,{payment:true})
            res.json({success:true, message:"paid"})
        }
        else{
            await ordermodel.findByIdAndDelete(orderId)
            res.json({success:false, message:" Not paid"})
        }
    } catch (error) {
        console.log(error);

    }
}
const userorder = async (req,res) =>{
    try {
        const orders = await ordermodel.find({userId:req.body.userId})
        res.json({success:true, data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
    }
}

const listorders = async (req, res) => {
    try {
        const orders = await ordermodel.find({})
        res.json({success:true, data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
    }
}

const updateStatus = async (req,res) => {
    try {
        await ordermodel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true,message:"Status Updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export{placeorder,verifyorder, userorder,listorders,updateStatus}