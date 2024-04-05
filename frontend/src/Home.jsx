import React from 'react'
import { Box, Stack} from '@chakra-ui/react'
import Card from './Card'
import axios from 'axios'


const Home = () => {


    const checkOutHandler = async(ammount)=>{
        
        const {} = await axios.post("http://localhost:8000",{
  ammount
        })
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