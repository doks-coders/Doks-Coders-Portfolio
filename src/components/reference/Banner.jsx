import React from 'react'
import { Box, Image, Button, Container, Heading, Grid, Badge,FormControl,Input } from '@chakra-ui/react'
import brandLogo from "../assets/logo.png"
import illustration from "../assets/illustration.png"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"

let badges = ['Boost Your Career', 'Make Friends','Find Your Zen']
const Banner = () => {
    return (
        <div>
            <header>
                <Box d="flex" alignItems="center" justifyContent="space-between" ml={6} mr={6}>
                    <Box>
                        <Image boxSize="90px" src={brandLogo} />
                    </Box>
                    <Box>
                        <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">
                            Login
                        </Button>
                        <Button colorScheme="gray.600" fontSize="sm" variant="link">
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </header>
            {/*Main Punch Line */}

            <Box>
                <Container maxWidth="container.xl">
                    <Box d="flex" alignItems="center" py="20" flexDirection={{
                        sm:"column",
                        md:"row",
                        lg:"row",
                        xl:"row",
                        base:"column"
                    }}>
                        <Box mr="6" mt="2">
                            <Heading as='h1' size="2xl">
                                <Box fontWeight='black'>Dive In and Work with us forever, till you are dead</Box>
                            </Heading>

                            <Box mt="6" fontWeight="medium">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio laborum eos eligendi fugit nemo r
                            </Box>
                        </Box>
                        <Box mt="2">
                            <Image w="100%" src={illustration}></Image>
                        </Box>
                    </Box>
                </Container>

            </Box>
            {/**Three boxes */}
            <Container maxWidth="container.xl" mt={10}>
                <Grid templateColumns={{
                        sm:"repeat(2,1fr)",
                        md:"repeat(3,1fr)",
                        lg:"repeat(3,1fr)",
                        xl:"repeat(3,1fr)",
                        base:"repeat(2,1fr)"
                    }} gap={2}>
                    <Box >

                        <Image w="100" borderRadius="lg" src={image1} alt="image 1"></Image>
                        <Button mt="5" colorScheme="teal" fontSize="sm" variant="link">
                            Explore Outdoors
                            <Image ml="2" w="10%" src={brandLogo}></Image>
                        </Button>
                    </Box>
                    <Box >

                        <Image w="100" borderRadius="lg" src={image1} alt="image 1"></Image>
                        <Button mt="5" colorScheme="teal" fontSize="sm" variant="link">
                            Explore Outdoors
                            <Image ml="2" w="10%" src={brandLogo}></Image>
                        </Button>
                    </Box>
                    <Box >

                        <Image w="100" borderRadius="lg" src={image1} alt="image 1"></Image>
                        <Button mt="5" colorScheme="teal" fontSize="sm" variant="link">
                            Explore Outdoors
                            <Image ml="2" w="10%" src={brandLogo}></Image>
                        </Button>
                    </Box>

                </Grid>

            </Container>

            {/**Pills */}
            <Container maxWidth="container.xl">
                <Box

                    direction="row"
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="flex-start"
                    my="10">

                    <Badges badges={badges} color={'blue.500'}/>
                </Box>



            </Container>
            {/*Last Header Section*/}
            <Container maxWidth="container.xl" mt="20">
                <Grid templateColumns="repeat(2,1fr)" gap={6}>

                     {/*First Part*/}
                    <Box>
                        <Heading as="h3" size="lg" mb="7"></Heading>

                        <Box d="flex" alignItems="center" flexWrap="wrap" flexDirection="row" w="100%">
                            <Box    minWidth="50%" >
                                <FormControl>
                                    <Box >
                                        <Input pl={8}
                                        placeholder="Search For Tennis"
                                        type="text"
                                        w="100%">
                                        </Input>
                                    </Box>
                                    

                                </FormControl>
                            </Box>
                            <Box   minWidth="50%">
                                <FormControl>
                                    <Box >
                                        <Input pl={8}
                                        placeholder="Search For Golf"
                                        type="text"
                                        w="100%">

                                        </Input>
                                        
                                    </Box>
                                    

                                </FormControl>
                            </Box>
                        </Box>

                        <Button
                        _hover={{opacity:'0.8'}}
                        mt="5"
                        pt="6"
                        pb="6"
                        w="100%"
                        color="white"
                        bg="red.500"
                        fontSize="lg"
                        >
                            <Box fontWeight="black">Search</Box>
                        </Button>
                    </Box>
                     {/*Second Part*/}
                    <Box>
                    <Badges badges={badges} color={'red.500'}/>
                    </Box>
                </Grid>
            </Container>
        </div>
    )
}

export default Banner


const Badges = ({badges,color}) => {
    
    return (
        <>
            {badges.map((badge) => (<Badge
                borderRadius='3xl'
                px={4}
                py={2}
                mr="4"
                mb="4"
                textTransform="normal"
                color="#ffffff"
                bg={color}>
                    
                {badge}

            </Badge>))}
        </>
    )
};



/**
 * A box is like for casing
 * 'd' is for display
 * d=flex
 * alignItems ="center" //for keeping objects in the center
 * justifyContent = space-between
 * fontWeight='black' or fontWeight="medium"
 * flexDirection="row"
 * flexBasis="50%"
 * pos="relative"
 * 
 * Go to chakra ui website and search for margin, you will see the different types of margins
 * you can search for anything you want in the chakra website
 * 
 *  import Image
 * boxSize is an attribute that helps us size the box
 * borderRadius="lg"
 * the src is imported from the assets directory
 * 
 * Import Button
 * colorScheme is the type of color you want to use
 * fontSize is the size of the font you want to use
 * variant is the type of  button you want to use
 *  _hover={{opacity:'0.8'}}
 * 
 * pr is padding right
 *
 * Now We import Container
 * Container is just like box, but with few differences
 * with container you can set maxWidth as an attribute 
 * maxWidth="container.xl"
 * 
 * <Box d="flex" alignItems="center" py="20" flexDirection="row"></Box>
   if you want to put your box items in a row

 * flexWrap="wrap" to wrap the item

 * Heading is imported
 * attributes  as='h1' size="2xl"
 * 
 * Grid is imported
 * templateColumns="repeat(3,1fr)"
 * this is for distributing 1/3 fraction unit to the boxes inside
 * gap={2} this is for adding a gap between the grid boxes
 * 
 * import Badge
    borderRadius='3xl'
    px={4}
    py={2}
    mr="4"
    mb="4"
    textTransform="normal"
    color="white"
    bg="blue.100"
 * 
 * 
 * 
 * 
 * 
 
 */