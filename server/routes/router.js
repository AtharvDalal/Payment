import express from "express";
import { checkOut } from "../controllers/paymentController.js";


const paymentRouter = express.Router()


paymentRouter.post('/checkout',checkOut)

export default paymentRouter