import React from 'react'
import { Box, Image, Text, Link, Button, Container, Heading, Grid, Badge, FormControl, Input } from '@chakra-ui/react'
import illustration from "../assets/Photox.png"

const Welcome = () => {
  return (
    <Box mt="20"><Grid templateColumns={{
      sm:"repeat(1,1fr)",
      md:"repeat(1,1fr)",
      lg:"repeat(2,1fr)",
      xl:"repeat(2,1fr)",
      base:"repeat(1,1fr)"
  }} gap="6">
      <Box d="flex" alignItems="center" justifyContent={"center"}>
        <Box position={"relative"}>
          <Image
            position="relative"
            w="500px" h="500px" m="auto" objectFit={"cover"} sizes="300"
            src={illustration}
            alt="Brand"
          />
          <Box
            position="absolute"
            d="flex"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent="flex-end"
            borderRadius="5px"
            top="0"
            height="100%"
            width="100%"
            m="2"
            px="3"
            py="1"
          >
            <Box w="100%" my="10" p="10" >
              <Box color="#ffffff" my="2" fontWeight={"bold"}>
                DAVENTY COPYRIGHT IMAGE
              </Box>
              <Box color="#ffffff" my="2" fontWeight={"bold"}>
                TAKEN IN 2018
              </Box>
              <Box color="#ffffff" mt="4"  >
                By Odokuma Daniel
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box w="100%" px={{
      sm:"0",
      md:"0",
      lg:"20",
      xl:"20",
      base:"0"
  }} height="100%" d="flex" >
        <Box p="10" d="flex" w="100%" height="100%" backgroundColor="#F1F9FF" flexDirection={"column"}>
          <Heading my="4" color={'#2699FB'} as="h5" size={"sm"}>
            QUOTE
          </Heading>
          <Heading my="4" fontWeight="medium" color="#2699FB" as="h3" size={'2xl'}>
            Welcome To Daventy
          </Heading>

          <Heading my="4" lineHeight={"1.8"} color="#7F7F7F" fontWeight="normal" as="h3" size={'lg'}>
          Why go through all the hassle of running a business and having an online presence, Let us take care of that online problem and give you more time get your work done
          </Heading>
          <Box my="8" d="flex" >
            <Box d="flex" height="100%" justifyContent={"center"} alignItems="center">
              <Image
                borderRadius={"full"}
                _hover={{ opacity: '0.8' }}
                boxSize="40px" src={illustration} />
            </Box>

            <Box ml="4" color="#2699FB" d="flex" flexDirection={"column"}>
              <Heading as="h5" size={'sm'}>Odokuma Ogheneguono</Heading>
              <Heading as="h5" size={'sm'} fontWeight="normal">Founder and CEO</Heading>
            </Box>

          </Box>
        </Box>
      </Box>
    </Grid></Box>
  )
}



export default Welcome