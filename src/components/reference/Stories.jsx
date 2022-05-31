import React from 'react'
import { Box, Image,Link, Button, Container, Heading, Grid, Badge,FormControl,Input } from '@chakra-ui/react'
import illustration from "../assets/illustration.png"
import image1 from "../assets/image1.png"
const Stories = () => {
  return (
    <Box mt="10">
<Container maxWidth="container.xl">
  <Box
  mb="7"
  display="flex"
  alignItems="center"
  justifyContent="space-between"
  >
    <Box align="center" w="100%">
      <Heading alignItems={"center"} as="h3" size="lg" pb="2">
Stories From Meetups
      </Heading>
      <Box maxWidth={"700px"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque deserunt, adipisci ea
      </Box>
    </Box>

  </Box>
  <Grid
  mt="10"
  mb="40"
  templateColumns={{
    sm:"repeat(2,1fr)",
    md:"repeat(3,1fr)",
    lg:"repeat(3,1fr)",
    xl:"repeat(3,1fr)",
    base:"repeat(1,1fr)"
}}
  gap={6}
  >
<ButtonStories/>
      </Grid>
      </Container>
    </Box>
  )
}

export default Stories


const ButtonStories = ()=>{
  let stories= [{topic:"Sell It ",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, error omnis nesciunt eos animi, ipsam culpa soluta repellendus dolores illum, expedita illo iste. Veniam voluptatum cum numquam, unde ullam iste."},{topic:"Work Something Out",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, error omnis nesciunt eos animi, ipsam culpa soluta repellendus dolores illum, expedita illo iste. Veniam voluptatum cum numquam, unde ullam iste."},
  {topic:"Begin Again",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, error omnis nesciunt eos animi, ipsam culpa soluta repellendus dolores illum, expedita illo iste. Veniam voluptatum cum numquam, unde ullam iste."}]

  return (
    <>
   {
      stories.map(val=>(
        <Box
        width="100%"
        align="left"
        >
          <Link>
          <Image
          position="relative"
          src={illustration}
          _hover={{opacity:'0.8'}}
          alt="brand"
          mr="15px"
          width="100%"
          />
          <Box>
            <Heading
            alignItems={"center"}
            as="h6"
            fontWeight={"black"}
            size="md"
            pt="4"
            pb="4"
            >
              {val.topic}
            </Heading>
          </Box>
          </Link> 
          <Box>
        {val.content} 
        </Box>
          </Box>
      ))
   }
    </>
    )
  
}