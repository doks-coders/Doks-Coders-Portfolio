import React from 'react'
import { Box, Image,Link, Button, Container, Heading, Grid, Divider } from '@chakra-ui/react'
import illustration from "../assets/illustration.png"
import image1 from "../assets/image1.png"



const BoxEl = ()=>{
  let upcoming =[{heading:"Upcoming Events",about:"Remote Group"},
  {heading:"Upcoming Events",about:"Remote Group"},
  {heading:"Upcoming Events",about:"Remote Group"},
]

   
return (
  <>
      {
upcoming.map((val)=>(
  <Box
  border="1px"
  borderColor="gray.200"
  p="15px"
  width={"100%"}
  align="left"
  >
    <Box d="flex" alignItems={"center"}>
<Image
position="relative"
w="50px"
src={illustration}
alt="brand"
mr="15px"
/>
<Heading
alignItems={"center"}
as="h6"
fontWeight="black"
size="md"
>
{val.heading}
</Heading>
    </Box>
    <Divider my="3" mb="2" />
    <Box
    py="2"
    color="#877457"
    textTransform={"uppercase"}
    fontWeight="bold"
    >
Mon, Aug 16 @ 10:45 PM NPT
    </Box>
    <Box fontWeight={"bold"} color="#212121">
{val.about}
    </Box>
  </Box>
))
      }
  </>

)
  
}


const Popular = () => {
  return (
    <Box mt="20">
<Container maxWidth={"container.xl"}>
<Box display={"flex"} alignItems="center" justifyContent={"space-between"} >
  <Box mb="4">
    <Heading as="h3" alignItems={"center"} size="lg">
Popular Groups
    </Heading>
  </Box>

  <Box >
    <Link  fontWeight="semibold" color="teal.500">
Explore more events
    </Link>
  </Box>
</Box>

  <Grid templateColumns={{
                        sm:"repeat(2,1fr)",
                        md:"repeat(3,1fr)",
                        lg:"repeat(3,1fr)",
                        xl:"repeat(3,1fr)",
                        base:"repeat(1,1fr)"
                    }} gap="6">
  <BoxEl/>
  </Grid>
</Container>
    </Box>
  )
}

export default Popular