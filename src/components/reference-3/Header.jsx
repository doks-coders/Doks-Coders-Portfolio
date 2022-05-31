import React from 'react'
import { Box, Image, Link, Button, Container, Text, Grid, Badge, FormControl, Input } from '@chakra-ui/react'

import brandLogo from "../assets/logo.png"
import illustration from "../assets/illustration.png"
import searchImage from "../assets/search.png"


const Header = () => {
    return (
        <header >
            <Box color="#2699FB" background={"#F1F9FF"} p="5" d="flex" alignItems="center" justifyContent={"space-between"}>
                <Box d="flex" >
                    <Text mx="5" as={"p"} size="sm">
                        <Link>
                            <Box align="center">ABOUT</Box>
                        </Link>
                    </Text>
                    <Text mx="5" as={"h5"} size="sm">
                        <Link>
                            <Box align="center">PRESS</Box>
                        </Link>
                    </Text>
                    <Text mx="5" as={"h5"} size="sm">
                        <Link>
                            <Box align="center">DEVELOPERS</Box>
                        </Link>
                    </Text>
                    <Text mx="5" as={"h5"} size="sm">
                        <Link>
                            <Box align="center">NEWS</Box>
                        </Link>
                    </Text>
                    <Text mx="5" as={"h5"} size="sm">
                        <Link>
                            <Box align="center">SPORT</Box>
                        </Link>
                    </Text>
                    <Text mx="5" as={"h5"} size="sm">
                        <Link>
                            <Box align="center">CULTURE</Box>
                        </Link>
                    </Text>
                </Box>

                {/**/}

                <Box d="flex" mr="10%">
                    <FormControl>
                        <Box >
                            <Box w="100%" d="flex" alignContent="center">
                            <Input 
                            borderColor={"#2699FB"}
                                placeholder="Search"
                                type="text"
                                w="80%">
                            </Input>    
                            <Button variant={'outline'} borderColor={"#2699FB"} >
                                <Image  boxSize={'20px'} src={searchImage}></Image>
                            </Button>
                            </Box>
                        </Box>
                    </FormControl>
                </Box>

            </Box>
        </header>
    )
}

export default Header