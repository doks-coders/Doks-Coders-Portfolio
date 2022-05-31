import React from 'react'
import { Box, Image, Heading, Link, Button, Container, Text, Grid, Badge, FormControl, Input } from '@chakra-ui/react'

import hammerLogo from "../assets/hammer.png"
import profile from "../assets/profile.png"
import redsearch from "../assets/redsearch.png"
import font from "../assets/Adevale/Adevale.ttf"

const Header = () => {
  return (
    <header >
      <Box color="#000000" background={"#EDF0F2"} p="5" d="flex" alignItems="center" justifyContent={"space-between"}>
        <Box d="flex" py="2"  justifyContent={'center'}  w="30%" >
          <Box >
          <LogoSetup/>
          </Box>
      
        </Box>

        {/*<Box d="flex" py="2"  background={"red"}  w="70%">*/}

        <Box d="flex" py="2" h="100px"    w="50%">
       <Box w="100%" h="100%"  justifyContent={'flex-end'} d="flex">
<Box w="25%" h="100%"  d="flex" justifyContent="center" alignItems="center">
<Text>MY TIMELINE</Text>
</Box>
<Box w="25%" h="100%"  d="flex" justifyContent="center" alignItems="center">
<Text>MY PROJECTS</Text>
</Box>
<Box w="10%" h="100%"  d="flex" justifyContent="center" alignItems="center">
<Box height="40%" w="1px" background={'black'}></Box>
</Box>
<Box w="10%" h="100%"  d="flex" justifyContent="center" alignItems="center">
<Text>ENG</Text>
</Box>
<Box w="10%" h="100%"  d="flex" justifyContent="center" alignItems="center">
<Image src={profile} boxSizing="30px" borderRadius={"full"}></Image>
</Box>
<Box w="10%" h="100%"  d="flex" justifyContent="center" alignItems="center">
<Image src={redsearch} boxSizing="30px" borderRadius={"full"}></Image>
</Box>
       </Box>
        </Box>

      </Box>
    </header>
  )
}

export default Header


const LogoSetup=()=>{
  return(
<Box w="250px" d="flex" justifyContent={'center'} position="relative">
  <Image height={'100px'} src={hammerLogo}></Image>
  <Box d="flex" alignItems={'center'} justifyContent="center" position="absolute" height="100%" top="0" width="100%" backgroundColor={''}>
    <Heading letterSpacing={'4px'} textAlign="center" fontSize="3.5rem" fontFamily={'Adevale'}>Daniverse</Heading>
  </Box>
</Box>
  )
  
}