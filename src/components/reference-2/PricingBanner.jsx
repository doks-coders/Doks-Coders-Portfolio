import React from 'react'
import { Box, Image,Link, Button, Container, Heading, Grid, Badge,FormControl,Input } from '@chakra-ui/react'
import hexagon from "../assets/hexagon.png"

const PricingBanner = () => {
  return (
    <>
    <Box mt="20" d={{
            sm:"none",
            md:"none",
            lg:"flex",
            xl:"flex",
            base:"none"
        }} w="100%" height="350px" justifyContent="center">
     <Box h="100%" w="700px" flexDirection="row" d="flex">
<Box h="100%" 
position="relative"
backgroundColor={'#7FC4FD'} w="25%">

<Box  d="flex"
alignItems={"center"}
position="absolute" w="100%" h="100%">
<Box  ml="-60px">


<Image w="50%" src={hexagon}></Image>

</Box>
</Box>
</Box>
<Box h="100%" alignItems="center" justifyContent="center"  d="flex"  backgroundColor={"#F1F9FF"} w="75%">
<Box  color="#2699FB" d="flex" flexDir="column" >
  <Heading fontSize={"3xl"} fontWeight={"normal"} as="h5" textAlign={'center'}>Have an Active Online </Heading>
  <Heading fontSize={"3xl"} fontWeight={"normal"} textAlign={'center'}>Presence 24/7 With Daventy</Heading>
  <Box mt="8" justifyContent="center"  d="flex">
  <Button color="white" backgroundColor={"#000000"}>Check Pricing</Button>
  </Box>
</Box>
</Box>
     </Box>
    </Box>

    <Box mt="20" d={{
            sm:"flex",
            md:"flex",
            lg:"none",
            xl:"none",
            base:"flex"
        }} w="100%" height="140px" justifyContent="center">
     <Box h="100%" w="300px" flexDirection="row" d="flex">
<Box h="100%" 
position="relative"
backgroundColor={'#7FC4FD'} w="25%">

<Box  d="flex"
alignItems={"center"}
position="absolute" w="100%" h="100%">
<Box  ml="-25px">


<Image w="50%" src={hexagon}></Image>

</Box>
</Box>
</Box>
<Box h="100%" alignItems="center" justifyContent="center"  d="flex"  backgroundColor={"#F1F9FF"} w="75%">
<Box  color="#2699FB" d="flex" flexDir="column" >
  <Heading fontSize={"md"} fontWeight={"normal"} as="h5" textAlign={'center'}>Have an Active Online </Heading>
  <Heading fontSize={"md"} fontWeight={"normal"} textAlign={'center'}>Presence 24/7 With Daventy</Heading>
  <Box mt="4" justifyContent="center"  d="flex">
  <Button size={'xs'} color="white" backgroundColor={"#000000"}>Check Pricing</Button>
  </Box>
</Box>
</Box>
     </Box>
    </Box>

    </>
  )

}

export default PricingBanner