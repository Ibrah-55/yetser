import usermodel from '../models/usermodel.js';

const addtocart = async (req, res) => {
  try {
    let userData = await usermodel.findById(req.body.userId);
    let cartdata = await userData.cartdata;

    // Extract the quantity from the request body
    const quantityToAdd = req.body.quantity; // Ensure this is sent from the client

    // Check if the item already exists in the cart
    if (!cartdata[req.body.itemId]) {
      cartdata[req.body.itemId] = quantityToAdd; // Add the quantity if not exists
    } else {
      cartdata[req.body.itemId] += quantityToAdd; // Update the quantity if exists
    }

    // Update the user's cart data
    await usermodel.findByIdAndUpdate(req.body.userId, { cartdata });

    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};


const removefromcart = async (req,res) =>{
    try {
        let userdata = await usermodel.findById(req.body.userId);
        let cartData = await userdata.cartdata;
        // console.log(cartData[req.body.itemId]-1);
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]= cartData[req.body.itemId] -1;
            // console.log(cartData[req.body.itemId]);
        }

       await usermodel.findByIdAndUpdate(req.body.userId,{cartdata:cartData})
        res.json({success:true, message:"Removed From Cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

const getcart = async (req,res) =>{
    try {
        let userdata = await usermodel.findById(req.body.userId);
        let cartData = await userdata.cartdata;
        // console.log(cartData);
        res.json({success:false, cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
       

}

export {addtocart, removefromcart }