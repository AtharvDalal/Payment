
import { instance } from "../server.js"

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