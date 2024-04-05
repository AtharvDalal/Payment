import { app } from "./app.js";
import Razorpay from "razorpay";

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRTE,
});

app.listen(process.env.PORT, () => {
  console.log(`server is Running On ${process.env.PORT}`);
});
