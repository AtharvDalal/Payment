
import { instance } from "../server.js"
import CryptoJS from "crypto-js";
import crypto from 'crypto'

export const checkOut = async(req,res)=>{
  
const options = {
    amount: Number(req.body.ammount * 100) ,  // amount in the smallest currency unit
    currency: "INR",
    
  };
 const order = await instance.orders.create(options);


 
 res.status(200).json({
    success:true,
    order
 })
}


export const PaymentVerification = async (req, res) => {
   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
     req.body;
 
   const body = razorpay_order_id + "|" + razorpay_payment_id;
 
   const expectedSignature = crypto
     .createHmac("sha256", process.env.RAZORPAY_API_SECRTE)
     .update(body.toString())
     .digest("hex");
 
   const isAuthentic = expectedSignature === razorpay_signature;
 
   if (isAuthentic) {
     // Database comes here
 
     res.redirect(
       `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
     );
   } else {
     res.status(400).json({
       success: false,
     });
   }
 };

