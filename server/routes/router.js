import express from "express";
import { checkOut, PaymentVerification } from "../controllers/paymentController.js";


const paymentRouter = express.Router()


paymentRouter.post('/checkout',checkOut)
paymentRouter.post('/payment', PaymentVerification)

export default paymentRouter