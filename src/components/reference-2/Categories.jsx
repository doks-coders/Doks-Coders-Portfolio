import React from 'react'
import { Box, Image, Link, Button, Container, Heading, Grid, Badge, FormControl, Input } from '@chakra-ui/react'
import illustration from "../assets/Dash1.png"
import illustration2 from "../assets/Dash.png"


const CategoriesList = () => {
  let list = [{ name: "Website Development", image:'webdevelopment.png',content: "We offer high quality websites made with the best web technologies" },
  { name: "Search Engine Optimisation",image:'seo.png', content: "This feature will help you increase your chances of being seen by users" },
  { name: "Content Writing", image:'content.png',content: "We offer experienced content writers for your blogs and captions" },
  { name: "Infographics",image:'infographic.png', content: "We offer detailed infographics to help user increase their trust and participation" },
  { name: "Automated Emails",image:'automated.png', content: "We offer beautifully designed emails to display to your email contacts" },
  { name: "Social Media Posts",image:'socialmedia.png', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur" }]

  return (
    <>
      {
        list.map((val,index) => (

          <Box key={index} borderRadius={'15px 50px'} boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} maxWidth={{
            sm:"100%",
            md:"100%",
            lg:"60%",
            xl:"60%",
            base:"100%"
        }} mx="auto" backgroundColor={'#FFFFFF'} color="#000000" flexDirection={"column"}>
            <Image height="300px" objectFit={'cover'} borderRadius={'15px 50px'} src={`Images/${val.image}`} w="100%" />
            <Box p="10">
              <Heading mt="3" fontWeight={"medium"} size="md">{val.name}</Heading>
              <Heading my="5" fontWeight={"normal"} size="md">{val.content}</Heading>
              <Heading mt="3" fontWeight={"medium"} size="md">
                <Link>
                  Read More
                </Link>
              </Heading>

            </Box>
          </Box>

        ))
      }
    </>
  )

}

const Categories = () => {
  return (
    <Box mt="20">
      <Heading as="h5" fontSize={'xl'} color="#7F7F7F" textAlign={'center'}>WHAT WE OFFER</Heading>
      <Box my="4" d="flex" justifyContent={'center'} w="100%">
        <Box w="120px" height="5px" backgroundColor={'#7F7F7F'}></Box>
      </Box>
      <Box color="#ffffff" m="3" mt="20" d="flex" justifyContent={'center'}>
        <Grid boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} borderRadius={{
      sm:"2%",
      md:"2%",
      lg:"5%",
      xl:"5%",
      base:"2%"
  }} backgroundImage={illustration} p="10" backgroundColor={"red"} templateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(2,1fr)",
          base: "repeat(1,1fr)"
        }} gap="10">
          <CategoriesList />
        </Grid>

    

      </Box>
    </Box>
  )
}

export default Categories





/**
 * Putting Overlays WIth Chakra UI
 * Gives You The dark Overlay Of the image
 *   <Box color="#ffffff" height={"85vh"} m="3" backgroundColor="#000000" borderRadius={"5%"} d="flex">
        <Box position={"relative"} height="100%" w="100%">
          <Image
            borderRadius={"5%"}
            opacity="0.3"
            position="relative"
            w="100%" height="100%" m="auto" objectFit={"cover"} sizes="300"
            src={illustration}
            alt="Brand"
          />

   </Box>
   </Box>

   Putting Items into the dark Overlay

 *   <Box color="#ffffff" height={"85vh"} m="3" backgroundColor="#000000" borderRadius={"5%"} d="flex">
        <Box position={"relative"} height="100%" w="100%">
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
            flexWrap="wrap"
            borderRadius="5px"
            top="0"
            height="100%"
            width="100%"
            m="2"
            px="3"
            py="1"
          >


          </Box>
 */