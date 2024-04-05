import React from 'react'
import { Box, Stack} from '@chakra-ui/react'
import Card from './Card'
import axios from 'axios'



 const Home = () => {


    const checkOutHandler = async(ammount)=>{
         
        const {data:{key}} = await axios.get("http://localhost:8000/api/getkey")

        const {data: {order}} = await axios.post("http://localhost:8000/api/checkout",{
            ammount
        })
        const options = {
            key,
            amount: order.ammount , 
            currency: "INR",
            name: "Amit Patil",
            description: "Buy Premium sub",
            image: "https://e7.pngegg.com/pngimages/103/263/png-clipart-graphics-graph-premium-quality-logo-label-logo.png",
            order_id: order.id , //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:8000/api/payment" ,
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9325592220"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme : {
                "color": "#3399cc"
            }
        };
        const razor = new window.Razorpay(options);
            razor.open();
    }
  return (
     <Box>

        <Stack direction={"row"}>
            
            <Card ammount={5000} img={'https://e7.pngegg.com/pngimages/103/263/png-clipart-graphics-graph-premium-quality-logo-label-logo.png'} checkOutHandler={checkOutHandler} />
            <Card ammount={3000} img={'https://e7.pngegg.com/pngimages/103/263/png-clipart-graphics-graph-premium-quality-logo-label-logo.png'} checkOutHandler={checkOutHandler} />
            
        </Stack>


     </Box>


  )
}
 

export default Home