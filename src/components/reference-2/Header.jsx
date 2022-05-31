import React from 'react'
import { Box, Image, Link, Button, Container, Text, Grid, Badge, FormControl, Input } from '@chakra-ui/react'

import brandLogo from "../assets/logo.png"
import illustration from "../assets/illustration.png"



const Header = () => {
    return (
        <header >
            <Box color="#ffffff" background={"#212121"} p="5" d="flex" alignItems="center" justifyContent={"space-between"}>
                <Box d="flex" >
                    <Text mx="5" as={"p"} size="sm">
                        <Link>
                            <Box align="center">DAVENTY</Box>
                        </Link>
                    </Text>
                    <Text mx="5" as={"h5"} size="sm">
                        <Link>
                            <Box align="center">HOME</Box>
                        </Link>
                    </Text>
                    <Text mx="5" as={"h5"} size="sm">
                        <Link>
                            <Box align="center">ABOUT</Box>
                        </Link>
                    </Text>
                </Box>

                {/**/}

                <Box d="flex" >
                    <Text mx="5" as={"p"} size="sm">
                        <Link>
                        <Image 
                        borderRadius={"full"}
                        _hover={{opacity:'0.8'}}
                        boxSize="30px" src={'Images/twitter.png'} />
                        </Link>
                    </Text>
                    <Text mx="5" as={"h5"} size="sm">
                        <Link>
                        <Image
                        borderRadius={"full"}
                        _hover={{opacity:'0.8'}}
                        boxSize="30px" src={'Images/instagram.png'} />
                        </Link>
                    </Text>
                    <Text mx="5" as={"h5"} size="sm">
                        <Link>
                            <Image 
                            borderRadius={"full"}
                            _hover={{opacity:'0.8'}}
                            boxSize="30px" src={'Images/facebook.png'} />
                        </Link>
                    </Text>
                </Box>

            </Box>
        </header>
    )
}

export default Header