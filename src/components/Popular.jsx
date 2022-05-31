import React from 'react'
import { Box, Image,Grid, Link, Button, Text, Container, Heading, Flex, chakra, FormControl, Input, useColorModeValue } from '@chakra-ui/react'
import fire from "../assets/fire.png"
import shoes from "../assets/shoes.png"

const Popular = () => {
  return (
    <Box backgroundColor={'#EDF0F2'}>
      <Box mt="100px" w="100%" d="flex">
        <Box d="flex" flexDir="column" alignItems={'center'} h="100%" w="65%">
          <Heading fontWeight="normal" fontSize="5xl" mb="20px" w="80%">My Projects</Heading>
          <Box d="flex" w="80%" h="100%" flexDirection="column" >
            <ListItems />
          
       
          </Box>
          
        </Box>
        <Box h="100%" w="35%" d="flex" justifyContent="center">
          <Box w="80%" h="100%">
            <Box w="100%" h="400px" position="relative">
              <Box w="100%" h="100%">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 495 388">
                  <text id="MY_WEB" data-name="MY WEB" fill="#fff" font-size="174" font-family="SegoeUI, Segoe UI" letter-spacing="0.03em"><tspan x="0" y="188">MY </tspan><tspan x="0" y="318">WEB</tspan></text>
                </svg>
              </Box>


              <Box h="100%" w="100%" justifyContent='center' alignItems={'center'} position="absolute" top="0" d="flex">
                <Box w="80%" h="80%">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 240.803 179.285">
                    <text id="stack" transform="matrix(0.966, -0.259, 0.259, 0.966, 234.591, 100.456)" fill="#e4003b" font-size="96" font-family="SegoeUI, Segoe UI"><tspan x="-214.172" y="0">stack</tspan></text>
                  </svg>
                </Box>
              </Box>

            </Box>

            <GridStack/>

            

          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Popular


const ListItems = () => {
  let list = [{ codebase: 'REACT',image:'Images/whocreatives.png', heading: 'E-Commerce Website', about: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.' },
  { codebase: 'VUE',image:'Images/medical.png', heading: 'Blog Website', about: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.' },
  { codebase: 'VANILLA',image:'Images/foodweb.png', heading: 'X and O Game', about: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.' }]

  return (
    <>
      {
        list.map(items => (
          <Box d="flex" my="2%" height="300px" w="100%">
            <Box d="flex" w="100%">
              <Box w="45%">
                <Image src={items.image} height="100%" w="100%" objectFit="cover"></Image>
              </Box>
              <Box d="flex" justifyContent={'center'} w="55%">
                <Box d="flex" w="80%" alignItems={'center'} >
                  <Box>
                    <Text fontSize="17px" my="4px" color={'#E4003B'}>{items.codebase}</Text>
                    <Text fontSize="36px" my="4px">{items.heading}</Text>
                    <Text fontSize="14px" my="20px">{items.about}</Text>
                    <Box d="flex" my="40px" alignItems="center">
                      <Box boxSize={'20px'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 34.512 34.869">
                          <g id="_" data-name="+" transform="translate(3.566 3.505)">
                            <line id="Line_6" data-name="Line 6" x1="27.38" y2="27.86" fill="none" stroke="#e4003b" stroke-width="10" />
                            <line id="Line_7" data-name="Line 7" x2="27.38" y2="27.86" fill="none" stroke="#e4003b" stroke-width="10" />
                          </g>
                        </svg>

                      </Box>

                      <Text ml="5px" fontSize="17px">VIEW PROJECT</Text>


                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

        ))
      }
    </>
  )
}

const GridStack=()=>{
  let stacks = [{name:'Vue',type:'Front-End',image:'Images/vue.png'},
{name:'React',type:'Front-End',image:'Images/react.png'},
{name:'Express',type:'Back-End',image:'Images/express.png'},
{name:'Nodejs',type:'Back-End',image:'Images/node.png'},
{name:'Firebase',type:'Database',image:'Images/firebase.png'},
{name:'MongoDB',type:'Database',image:'Images/mongodb.png'},]
return(
  <>
  <Grid p="20px" templateColumns={{
    sm:"repeat(2,1fr)",
    md:"repeat(2,1fr)",
    lg:"repeat(2,1fr)",
    xl:"repeat(2,1fr)",
    base:"repeat(1,1fr)"
}} gap="6">
  {
    stacks.map(val=>(
      <StackCard type={val.type} image={val.image} name={val.name}/>
    ))
  }
  </Grid>
  </>
)
}

const StackCard = ({ type, name, image }) => {
  return (
    <>
    <Box>
     

      <Image bg="gray.300"  h={64}
        w="100%"
        rounded="lg"
        shadow="md" src={image} objectFit={'cover'}></Image>
      <Box w="100%" d="flex" justifyContent={'center'}>
        <Box
          w="100%"
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
            {name}
          </chakra.h3>

          <Flex
            alignItems="center"
            justifyContent="center"
            py={2}
            px={3}
            bg={useColorModeValue("gray.200", "gray.700")}
          >

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
              {type}
            </chakra.button>
          </Flex>
        </Box>
      </Box>
      </Box>
    </>
  );
};

