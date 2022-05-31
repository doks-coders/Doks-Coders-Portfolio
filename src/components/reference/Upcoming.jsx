import React from 'react'
import { Box, Image,Link,Flex,Button, Container, Heading, Grid, Badge,chakra,FormControl,Input,useColorModeValue } from '@chakra-ui/react'
import illustration from "../assets/illustration.png"
import image1 from "../assets/image1.png"

function Cards(){
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="sm"
        mx="auto"
      >
        <Box
          bg="gray.300"
          h={64}
          w="full"
          rounded="lg"
          shadow="md"
          bgSize="cover"
          bgPos="center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
          }}
        ></Box>

        <Box
          w={{ base: 56, md: 64 }}
          bg={useColorModeValue("white", "gray.800")}
          mt={-10}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <chakra.h3
            py={2}
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
            color={useColorModeValue("gray.800", "white")}
            letterSpacing={1}
          >
            Nike Revolt
          </chakra.h3>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            py={2}
            px={3}
            bg={useColorModeValue("gray.200", "gray.700")}
          >
            <chakra.span
              fontWeight="bold"
              color={useColorModeValue("gray.800", "gray.200")}
            >
              $129
            </chakra.span>
            <chakra.button
              bg="gray.800"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: useColorModeValue("gray.700", "gray.600"),
              }}
              _focus={{
                bg: useColorModeValue("gray.700", "gray.600"),
                outline: "none",
              }}
            >
              Add to cart
            </chakra.button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};


const BoxEl = ()=>{
  let events =[{name:"Upcoming Events",group:"Remote Group"},
  {name:"Upcoming Events",group:"Remote Group"},
  {name:"Upcoming Events",group:"Remote Group"},
]

   
return (
  <>
      {
events.map((val)=>(
  <Box width="100%" align="left">
  <Box position="relative">
  <Image
  position="relative"
  w="100%"
  src={image1}
  alt="Brand"
  />
  <Box
  position="absolute"
  d="flex"
  alignItems={"center"}
  borderRadius="5px"
  top="0"
  background="#ffffff"
  fontSize={"sm"}
  m="2"
  px="3"
  py="1"
  
  >
  <Box fontWeight={"semibold"}>
    Online Event
  </Box>
  </Box>
  </Box>
  
  <Box mt="3" color="#877457" fontWeight="semibold"> Sat, Aug 14 @ 9:45 PM NPT</Box>
  <Heading
    alignItems={"center"}
    as="h6"
    mt="1"
    fontWeight={"black"}
    size="sm"
    >
  {val.name}
    </Heading>
    <Box my="3" size="xs">
     {val.group}
    </Box>
    <Box d="flex" alignItems="center" justifyContent="space-between">
      <Box d="flex" alignItems="center">
  <Image
  borderRadius={"full"}
  border="1px"
  borderColor="gray.200"
  boxSize="35px"
  mr="-8px"
  src={image1}
  />
  <Image
  borderRadius={"full"}
  border="1px"
  borderColor="gray.200"
  boxSize="35px"
  mr="-8px"
  src={image1}
  />
  <Box ml="16px" color="#757575">
  134
  </Box>
      </Box>
  
    </Box>
    </Box>
))
      }
  </>

)
  
}


const Upcoming = () => {
  return (
    <Box mt="20">
<Container maxWidth={"container.xl"}>
<Box display={"flex"} alignItems="center" justifyContent={"space-between"} >
  <Box mb="4">
    <Heading as="h3" alignItems={"center"} size="lg">
Upcoming Online Events
    </Heading>
  </Box>

  <Box >
    <Link  fontWeight="semibold" color="teal.500">
Explore more events
    </Link>
  </Box>
</Box>
<Grid   templateColumns={{
    sm:"repeat(2,1fr)",
    md:"repeat(3,1fr)",
    lg:"repeat(3,1fr)",
    xl:"repeat(3,1fr)",
    base:"repeat(1,1fr)"
}} gap="6">
 
<BoxEl/>


</Grid>
<Cards/>
</Container>
    </Box>
  )
}

export default Upcoming

