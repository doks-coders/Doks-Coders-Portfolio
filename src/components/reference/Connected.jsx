import React from 'react'
import { Box, Image,Link, Button, Container, Heading, Grid, Badge,FormControl,Input } from '@chakra-ui/react'
import illustration from "../assets/illustration.png"
import image1 from "../assets/image1.png"

import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
const Connected = () => {
  return (
    <Box my="20">
<Container maxWidth={"container.xl"}>
<Box
display="flex"
pos="relative"
justifyContent={"space-between"}
alignItems="center"
>
  <Box
    display={{
      sm:'none',
      md:'block',
      lg:'block',
      xl:'block',
      base:'none'
    }}
  >
    <Image w="260px" src={illustration}></Image>
  </Box>

  <Box pos="relative" mx="auto" align="center">
<Image w="80px" left="0" src={image1}></Image>
<Heading as="h6" size="md" my="7">
  Stay Connected
</Heading>
<Box d="flex" >
 <Button m="1" rounded={"xl"}  colorScheme={"gray"}>Get on Google Playstore</Button>
 <Button m="1" rounded={"xl"}   >Get on IOS Store</Button>
</Box>
  </Box>

  <Box
  display={{
    sm:'none',
    md:'block',
    lg:'block',
    xl:'block',
    base:'none'
  }}
  >
    <Image w="260px" src={illustration}></Image>
  </Box>

</Box>

</Container>
    </Box>
  )
}

export default Connected