import React from 'react'
import { Box, Image, Link, Text, Button, Container, Heading, Grid, Badge, FormControl, Input } from '@chakra-ui/react'
import illustration from "../assets/Video.png"


const Banner = () => {
  return (
    <Box>
      <Box color="#ffffff" height={"85vh"} m="3" backgroundColor="#000000" borderRadius={"5%"} d="flex">
        <Box p="10" w="100%" d={{
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
          base: "none"
        }} flexDirection={{
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          base: "column"
        }} justifyContent={"space-between"}>
          <Box w={{
            sm: "100%",
            md: "50%",
            lg: "50%",
            xl: "50%",
            base: "100%"
          }} height="100%" d="flex" alignItems="center" justifyContent={"center"}>
            <Box d="flex" flexDirection={"column"}>
              <Heading my={"3"} as="h3" size="2xl" >
                DAVENTY AGENCY
              </Heading>
              <Heading my={"2"} as="h5" size="md" >Promote Your Business Online</Heading>
              <Heading my={"2"} as="h5" size="md" >Efficiently and Effectively</Heading>
            </Box>
          </Box>
          <Box w={{
            sm: "100%",
            md: "50%",
            lg: "50%",
            xl: "50%",
            base: "100%"
          }} d="flex" alignItems="center" justifyContent={"center"}>
            <Image
              p="3"
              borderRadius={"7%"}
              minWidth="100" src={illustration} />
          </Box>
        </Box>

        <Box d={{
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
          base: "block"
        }} position={"relative"} height="100%" w="100%">
          <Image
            borderRadius={"5%"}
            opacity="0.3"
            position="relative"
            w="100%" height="100%" m="auto" objectFit={"cover"} sizes="300"
            src={illustration}
            alt="Brand"
          />

          <Box
            position="absolute"
            d="flex"
            flexDirection={"row"}
         alignItems="center"
         justifyContent={'center'}
            height="100%"
            width="100%"
            top="0"
          >
             <Box d="flex" flexDirection={"column"}>
               <Box d="flex" justifyContent={'center'} mb="4">
               <Image
                borderRadius={"full"}
                _hover={{ opacity: '0.8' }}
                boxSize="200px" src={illustration} />
               </Box>
            
              <Heading my={"3"} as="h3" size="xl" >
                DAVENTY AGENCY
              </Heading>
              <Heading my={"2"} as="h5" size="sm" >Promote Your Business Online</Heading>
              <Heading my={"2"} as="h5" size="sm" >Efficiently and Effectively</Heading>
            </Box>


          </Box>
          </Box>

        {/*Small Screen Banner*/}
        
      </Box>
    </Box>
  )
}

export default Banner