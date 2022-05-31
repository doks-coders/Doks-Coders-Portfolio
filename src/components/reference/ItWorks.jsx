import React from 'react'
import { Box, Heading, Container, Grid, Button, Image, Link } from '@chakra-ui/react'
import image1 from "../assets/image2.png"

const ItWorks = () => {
  return (
    <Box>
      <Container maxWidth={"container.xl"} my="20">
        <Heading my="5" align="center" as={"h3"} size="lg" pb="2">
          How meet up works
        </Heading>
        <Box align="center" maxW={"700px"} mx="auto" pb="10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt omnis rerum veritatis quasi amet voluptas quis natus nobis delectus officiis placeat vitae esse quae ipsam, ratione sint ducimus mollitia!
        </Box>

        <Grid templateColumns={{
                        sm:"repeat(2,1fr)",
                        md:"repeat(3,1fr)",
                        lg:"repeat(3,1fr)",
                        xl:"repeat(3,1fr)",
                        base:"repeat(2,1fr)"
                    }} gap={6}>
          <Box align="center" mx="auto" >
            <Image w="100" boxSize="160px" borderRadius="lg" src={image1} alt="image 1"></Image>
            <Heading my="5" as={"h5"} size="md">
              <Link>
                <Box color="teal" align="center">Join a group</Box>
              </Link>
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing eli, </p>        
          
          </Box>

          <Box align="center" mx="auto">
            <Image w="100" boxSize="160px" borderRadius="lg" src={image1} alt="image 1"></Image>
            <Heading my="5" as={"h5"} size="md">
              <Link>
                <Box color="teal" align="center">Join a group</Box>
              </Link>
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing eli, </p>        
          
          </Box>
          
          <Box align="center" mx="auto">
            <Image w="100" boxSize="160px" borderRadius="lg" src={image1} alt="image 1"></Image>

            <Heading my="5" as={"h5"} size="md">
              <Link>
                <Box color="teal" align="center">Interact</Box>
              </Link>
            </Heading>          
            <p>Lorem ipsum dolor sit amet consectetur adipisicing eli, </p>
            </Box>
        </Grid>
        <Box>
        <Box align="center" mt="8">
        <Button 
        _hover={{opacity:0.8}}
        colorScheme={"blue"} fontSize="sm" variant="solid">
                            Join Meetup
                        </Button>
        </Box>
      </Box>
       
      </Container>
     
      
    </Box>
  )
}

export default ItWorks