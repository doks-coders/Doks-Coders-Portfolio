import React from 'react'
import { Box, Image, Link, Button, Container, Heading, Divider, List, ListItem, } from '@chakra-ui/react'
import image1 from "../assets/image1.png"
const LinkSetup = () => {
  let links = [{ header: 'Your Account', items: ['Sign Up', 'Log In', 'Help'] }, { header: 'Social Media', items: ['Instagram', 'Facebook', 'Twitter'] },
  { header: 'Services', items: ['FAQ', 'Customer Service', 'Jobs'] },]
  return (
    <>
      {
        links.map((val,key) => (
          <Box
            flex="1"
            mb="0"
            mt="4"
            key={key}
          >
            <Heading size="sm">{val.header}</Heading>
            <List mt="4" spacing={2}>
              {
                val.items.map((val,key) => (
                  <ListItem key={key}>
                    <Link color={"#A2A2A2"}>{val}</Link>
                  </ListItem>
                ))
              }
            </List>
          </Box>
        ))
      }
    </>
  )
}

const Footerbottom = () => {
  return (
    <Box mt={5} color="#ffffff" background={"#212121"} py="10">
      <Container maxWidth={"container.xl"}>
        <Box d="flex" alignItems={"center"}>
          <Heading size="md">Join Daventy Now</Heading>
          <Button ml="4" colorScheme={"white"} variant="outline">Get Started</Button>
        </Box>
        <Divider my={"10"} />
        <Box display="flex"
          flexDirection={{
            sm:"column",
            md:"row",
            lg:"row",
            xl:"row",
            base:"column"
        }}
        
          alignItems="top"
        >
          <LinkSetup />
        </Box>
        <Box
          mt="15"
          d="flex"
          flexDirection={"row"}
          justifyContent="space-between"
          alignItems={"center"}
          flex
        >
          <Box d="flex" flexDirection="column">
            <Box mb="4">Follow Us</Box>
            <Box d="flex" flexDirection="row" >
              <Link mr="4">
                <Image
                  borderRadius={"full"}
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  src={image1}
                />
              </Link>
              <Link mr="4">
                <Image
                  borderRadius={"full"}
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  src={image1}
                />
              </Link>
              <Link mr="4">
                <Image
                  borderRadius={"full"}
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  src={image1}
                />
              </Link>
            </Box>
          </Box>
          <Box
          d="flex"
          mt={{
            sm:'10',
            md:'0',
            lg:'0',
            xl:'0',
            base:'4'
          }}
          flexDirection={{
            sm:"column",
            md:"row",
            lg:"row",
            xl:"row",
            base:"column"
        }}
          >

<Button m="1" rounded={"xl"}  colorScheme={"blue"}>Get on Google Playstore</Button>
 <Button m="1" rounded={"xl"}  colorScheme={"yellow"} >Get on IOS Store</Button>

          </Box>
        </Box>

        <Box d="flex" flexWrap={"no-wrap"} mt="10">
<Link mr="5" fontSize="sm">@ 2021 Meetup</Link>
<Link mr="5" fontSize="sm">Terms of Service</Link>
<Link mr="5" fontSize="sm">Privacy Policy</Link>
<Link mr="5" fontSize="sm">Cookie Policy</Link>
<Link mr="5" fontSize="sm">Help</Link>

        </Box>
      </Container>

    </Box>
  )
}

export default Footerbottom


/**
 * 
 * const SmallReviewItem = ({ name, display, opacity }) => {

  return (
    <>


      <Box d="flex" justifyContent={'center'}  >
        <Image
          borderRadius={"full"}
          opacity={opacity}
          boxSize="30px" src={illustration} />
      </Box>

      <Box d="flex" flexDirection={'column'}>
        <Heading as="h5" my="3" fontSize={'8px'} textAlign={'center'}>{name}</Heading>
        <Heading as="h5" size="xs" fontSize={'8px'} noOfLines={2} fontWeight={"normal"} fontStyle="italic" textAlign={'center'}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro eveniet accusantium voluptatem quas recusandae fugiat minus numquam similique, commodi erum? </Heading>
      </Box>
      {
        display && <Box mt="10" w="100%" d="flex" justifyContent={"flex-end"}>
          <Heading as="h5" fontSize={'8px'} size="xs" textAlign={'center'}> <Link>
          Read More</Link> </Heading>

        </Box>
      }


    </>
  )


}


      <Box mt="20" d="flex" w="100%" justifyContent={'center'}>

<Box position="relative" height="200px"  width="75px">
  <Box w="100%" height="100%" position="absolute" d="flex" alignItems={'center'}>
    <Box p="10" color="#2699FB" ml="-40" zIndex={'-1'} height="80%" width="150%" flexDirection={'column'} justifyContent={'center'} d="flex" backgroundColor={"#F1F9FF"}>
      <ReviewItem name={'Daniel Odokuma'} display={false} opacity={0.8} />
    </Box>
    <Box p="10" d="flex" color="white" flexDirection={'column'} justifyContent={'center'} height="100%" width="200%" backgroundColor={'#2699FB'}>
      <ReviewItem name={'Peter Odokuma'} display={true} opacity={1} />
    </Box>
    <Box p="10" color="#2699FB" mr="-40" zIndex={'-1'} height="80%" width="150%" flexDirection={'column'} justifyContent={'center'} d="flex" backgroundColor={"#F1F9FF"}>
      <ReviewItem name={'Rachel Odokuma'} display={false} opacity={0.8} />
    </Box>

  </Box>
</Box>
</Box>
 * 
 */