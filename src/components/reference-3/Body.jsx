import React from 'react'

import { Box, Image, Link, Button, Text, Container, Heading, Divider, Grid, Badge, FormControl, Input } from '@chakra-ui/react'

import brandLogo from "../assets/logo.png"
import illustration from "../assets/hero.png"
import searchImage from "../assets/search.png"
import globe from "../assets/globe.png"
import time from "../assets/time.png"
import Pagination from '../PrimeComponents/Pagination'



const Body = () => {
    return (
        <Box>
            <Container maxWidth={'container.2xl'}>
                <Box w="100%">
                    <Box w="100%" d="flex" flexDirection="row">
                        <Box w="70%" justifyContent={'center'} py="6px" d="flex" >
                            <Box w="85%">
                                <Heading my="10px" fontWeight="bold" fontSize={"2xl"} color="#2699FB" as="h5">
                                    DAVENTY BLOG
                                </Heading>
                                <Box w="100%">
                                    <Box mt="50px" w="100%">
                                        <Image w="100%" objectFit={'cover'} src={illustration} height="400px"></Image>
                                    </Box>
                                    <Heading mt="25px" mb="15px" fontWeight="bold" fontSize={"2xl"} color="#2699FB" as="h5">
                                        <Link> Willow Smith Has Released Four New Songs For Us</Link>
                                    </Heading>
                                    <Heading fontWeight="normal" fontSize={"xl"} color="#2699FB" as="h5">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, autem cum accusamus ea quam eum necessitatibus corrupti mollitia voluptatibus sapiente quo vitae pariatur quis provident fuga exercitationem nisi consectetur explicabo.
                                    </Heading>
                                </Box>

                                <Box my="50px" d="flex" w="100%">
                                    <Box w="20%">
                                        <Heading as="h5" fontWeight={'medium'} fontSize="sm">
                                            RECENT STORIES
                                        </Heading>
                                    </Box>
                                    <Box w="80%" d="flex" alignContent={'center'}>
                                        {/*Divider*/}
                                        <Divider my="3" mb="2" />
                                    </Box>
                                </Box>
                                <GridSetup />
                                <Box mt="5">
                                    <Pagination />
                                </Box>

                            </Box>
                        </Box>
                        <Box w="30%"  >
                            <Box display="flex" justifyContent="center" mt="10px" backgroundColor={'#F1F9FF'} h="100%" w="100%">
                                <Box w="80%" h="100%" d="flex" flexDir="column" >
                                    <Box mt="25px" d="flex" w="100%">
                                        <Box w="25%">
                                            <Heading as="h5" fontWeight={'medium'} fontSize="sm">
                                                TOP STORIES
                                            </Heading>
                                        </Box>
                                        <Box w="75%" d="flex" alignContent={'center'}>
                                            {/*Divider*/}
                                            <Divider my="3" mb="2" />
                                        </Box>
                                    </Box>
                                    <PopularStories />
                                </Box>
                            </Box>
                        </Box>

                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Body

const GridItem = ({ image, heading, subheading, author, period }) => {
    return (
        <Box w="100%">
            <Box w="100%">
                <Box w="100%" position="relative">
                    <Image w="100%" objectFit={'cover'} src={image} height="300px"></Image>
                    <Box w="100%" h="100%" position="absolute" top="0" >
                        <Box p="2" w="80px" border={'7px'} color="white" backgroundColor={'#2699FB'} m="2">SPORTS</Box>
                    </Box>
                </Box>

            </Box>
            <Heading mt="25px" mb="15px" fontWeight="bold" fontSize={"2xl"} color="#2699FB" as="h5">
                <Link>{heading}</Link>
            </Heading>
            <Heading noOfLines={'3'} fontWeight="normal" fontSize={"xl"} color="#2699FB" as="h5">
                {subheading}
            </Heading>
            <Box my="15px" d="flex">
                <Box minWidth={'25%'} d="flex">
                    <Image mr="5px" boxSize={'20px'} src={globe}></Image>
                    <Box h="100%" alignContent="center" d="flex">
                        <Text color="#2699FB">{author}</Text>
                    </Box>

                </Box>
                <Box ml="5px" minWidth={'25%'} d="flex">
                    <Image mr="5px" boxSize={'20px'} src={time}></Image>
                    <Box h="100%" alignContent="center" d="flex">
                        <Text color="#2699FB">{period} ago</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

const GridSetup = () => {
    let recentStories = [{ image: 'Images/automated.png', heading: 'Alpha Centauri, Our New Planet', subheading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, autem cum accusamus ea quam eum necessitatibus corrupti mollitia voluptatibus sapiente quo vitae pariatur quis provident fuga exercitationem nisi consectetur explicabo.', author: 'David Ani', period: '1hr' },
    { image: 'Images/automated.png', heading: 'Why Hollywood has changed', subheading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, autem cum accusamus ea quam eum necessitatibus corrupti mollitia voluptatibus sapiente quo vitae pariatur quis provident fuga exercitationem nisi consectetur explicabo.', author: 'Samuel Peter', period: '1hr' },
    { image: 'Images/automated.png', heading: 'Global Warming, Fact or Fiction', subheading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, autem cum accusamus ea quam eum necessitatibus corrupti mollitia voluptatibus sapiente quo vitae pariatur quis provident fuga exercitationem nisi consectetur explicabo.', author: 'Frank Law', period: '1hr' },
    { image: 'Images/automated.png', heading: 'God Exists and we have proof', subheading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, autem cum accusamus ea quam eum necessitatibus corrupti mollitia voluptatibus sapiente quo vitae pariatur quis provident fuga exercitationem nisi consectetur explicabo.', author: 'Peter Owobu', period: '1hr' }]
    return (
        <>
            <Grid templateColumns="repeat(2,1fr)" gap="6">
                {
                    recentStories.map((val) => (
                        <GridItem image={val.image} heading={val.heading} subheading={val.subheading} author={val.author} period={val.period} />

                    ))
                }

            </Grid>
        </>
    )
}

const PopularStories = () => {
    let popularStories = [{ image: 'Images/seo.png', heading: 'Alpha Centauri, Our New Planet', subheading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, autem cum accusamus ea quam eum necessitatibus corrupti mollitia voluptatibus sapiente quo vitae pariatur quis provident fuga exercitationem nisi consectetur explicabo.', author: 'David Ani', period: '1hr' },
    { image: 'Images/seo.png', heading: 'Why Hollywood has changed', subheading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, autem cum accusamus ea quam eum necessitatibus corrupti mollitia voluptatibus sapiente quo vitae pariatur quis provident fuga exercitationem nisi consectetur explicabo.', author: 'Samuel Peter', period: '1hr' },
    { image: 'Images/seo.png', heading: 'Global Warming, Fact or Fiction', subheading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, autem cum accusamus ea quam eum necessitatibus corrupti mollitia voluptatibus sapiente quo vitae pariatur quis provident fuga exercitationem nisi consectetur explicabo.', author: 'Frank Law', period: '1hr' },
    { image: 'Images/seo.png', heading: 'God Exists and we have proof', subheading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, autem cum accusamus ea quam eum necessitatibus corrupti mollitia voluptatibus sapiente quo vitae pariatur quis provident fuga exercitationem nisi consectetur explicabo.', author: 'Peter Owobu', period: '1hr' }]

    return (
        <>
            {popularStories.map(val => (
                <Box my="20px" w="100%">
                    <Box w="100%">
                        <Box w="100%" position="relative">
                            <Image w="100%" objectFit={'cover'} src={val.image} height="300px"></Image>
                            <Box w="100%" h="100%" position="absolute" top="0" >
                                <Box p="2" w="80px" border={'7px'} color="white" backgroundColor={'#2699FB'} m="2">SPORTS</Box>
                            </Box>
                        </Box>
                    </Box>
                    <Heading mt="25px" mb="15px" fontWeight="bold" fontSize={"2xl"} color="#2699FB" as="h5">

                        <Link>{val.heading}</Link>
                    </Heading>
                    <Heading noOfLines={'3'} fontWeight="normal" fontSize={"xl"} color="#2699FB" as="h5">
                        {val.subheading}
                    </Heading>
                </Box>
            )

            )}

        </>
    )
}