import React from 'react'
import { Box, Image, Link, Button, Container, Heading, Grid, Badge, FormControl, Input } from '@chakra-ui/react'

import illustration from "../assets/Dash1.png"
const Reviews = () => {
  return (
    <Box my="40">
      <Box d="flex" w='100%' justifyContent={'center'}>
        <Box w="50%">
        <Heading color={'#212121'} fontWeight={'normal'} fontSize={{
            sm:"20px",
            md:"20px",
            lg:"40px",
            xl:"40px",
            base:"20px"
        }}> WHAT OUR  CUSTOMERS  ARE SAYING</Heading>
        <Box w={{
            sm:"60px",
            md:"60px",
            lg:"120px",
            xl:"120px",
            base:"60px"
        }} height="5px" backgroundColor={'#2699FB'}></Box>
        </Box>
      </Box>
     
      <Box mt="20" d={{
            sm:"none",
            md:"none",
            lg:"flex",
            xl:"flex",
            base:"none"
        }} w="100%" justifyContent={'center'}>

        <Box position="relative" height="400px"  width="600px">
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

      {/**/}

      <Box mt="20" d={{
            sm:"flex",
            md:"flex",
            lg:"none",
            xl:"none",
            base:"flex"
        }} w="100%" justifyContent={'center'}>

<Box position="relative" height="200px"  width="75px">
  <Box w="100%" height="100%" position="absolute" d="flex" alignItems={'center'}>
    <Box p="10" color="#2699FB" ml="-40" zIndex={'-1'} height="80%" width="150%" flexDirection={'column'} justifyContent={'center'} d="flex" backgroundColor={"#F1F9FF"}>
      <SmallReviewItem name={'Daniel Odokuma'} display={false} opacity={0.8} />
    </Box>
    <Box p="10" d="flex" color="white" flexDirection={'column'} justifyContent={'center'} height="100%" width="200%" backgroundColor={'#2699FB'}>
      <SmallReviewItem name={'Peter Odokuma'} display={true} opacity={1} />
    </Box>
    <Box p="10" color="#2699FB" mr="-40" zIndex={'-1'} height="80%" width="150%" flexDirection={'column'} justifyContent={'center'} d="flex" backgroundColor={"#F1F9FF"}>
      <SmallReviewItem name={'Rachel Odokuma'} display={false} opacity={0.8} />
    </Box>

  </Box>
</Box>
</Box>

    </Box>
  )
}

export default Reviews

const ReviewItem = ({ name, display, opacity }) => {

  return (
    <>


      <Box d="flex" justifyContent={'center'}  >
        <Image
          borderRadius={"full"}
          opacity={opacity}
          boxSize="80px" src={illustration} />
      </Box>

      <Box d="flex" flexDirection={'column'}>
        <Heading as="h5" my="3" size="sm" textAlign={'center'}>{name}</Heading>
        <Heading as="h5" size="sm" noOfLines={2} fontWeight={"normal"} fontStyle="italic" textAlign={'center'}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro eveniet accusantium voluptatem quas recusandae fugiat minus numquam similique, commodi erum? </Heading>
      </Box>
      {
        display && <Box mt="10" w="100%" d="flex" justifyContent={"flex-end"}>
          <Heading as="h5" size="sm" textAlign={'center'}> <Link>
          Read More</Link> </Heading>

        </Box>
      }


    </>
  )


}



const SmallReviewItem = ({ name, display, opacity }) => {

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
        <Heading as="h5" size="xs" fontSize={'8px'} noOfLines={3} fontWeight={"normal"} fontStyle="italic" textAlign={'center'}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro eveniet accusantium voluptatem quas recusandae fugiat minus numquam similique, commodi erum? </Heading>
      </Box>
      {
        display && <Box mt="6" w="100%" d="flex" justifyContent={"flex-end"}>
          <Heading as="h5" fontSize={'8px'} size="xs" textAlign={'center'}> <Link>
          Read More</Link> </Heading>

        </Box>
      }


    </>
  )


}