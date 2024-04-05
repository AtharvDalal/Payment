import express from "express";
import { config } from "dotenv";
import paymentRouter from "./routes/router.js";
import cors from 'cors'

export const app = express()


config({
    path:"./config/config.env"
})


app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use('/api', paymentRouter)

app.get('/api/getkey',(req,res)=> res.status(200).json({
    key : process.env.RAZORPAY_API_KEY
}))