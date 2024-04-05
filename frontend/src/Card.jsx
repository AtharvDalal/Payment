import React from 'react'
import {  VStack,Text, Image} from "@chakra-ui/react"

const Card = ({ammount,img,checkOutHandler}) => {
  return (
    
    
    <VStack>
  <Image src={img} boxSize={'80'}  />
 <Text> ₹{ammount} </Text>
 <button onClick={()=> checkOutHandler(ammount)}>Buy Now</button>

    </VStack>
  )
}

export default Card