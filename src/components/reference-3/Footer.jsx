import React from 'react'
import { Box, Text, Image, Link, Input, FormControl, Button, Container, Heading, Divider, List, ListItem, } from '@chakra-ui/react'

const Footerbottom = () => {
  return (
    <Box mt={20} color="#ffffff" background={"#2699FB"} py="10">
     <Container maxWidth="95%">
        <Box d="flex" w="100%">
          <Box d="flex" w="20%" flexDirection="row" justifyContent="center">
          <Box d="flex" flexDirection="column" justifyContent="space-between" >
            <Text>DAVENTY</Text>
            <Text>@daventyagency 2022</Text>
          </Box>
          </Box>
          <Box d="flex" w="20%" flexDirection="row" justifyContent="center">
          <Box d="flex" flexDirection={'column'} justifyContent="space-between" >
            <Text>About Us</Text>
            <Text>Contacts</Text>
            <Text>Terms and Conditions</Text>
          </Box>
          </Box>
          
          <Box d="flex" w="20%" flexDirection="row" justifyContent="center">
          <Box d="flex" flexDirection={'column'} justifyContent="space-between" >
            <SocialLinks />
          </Box>
          </Box>
          <Box d="flex" w="20%" flexDirection="row" justifyContent="center">
          <Box d="flex" flexDirection={'column'} justifyContent="space-between" >
            <Text>Subscribe To Our Newsletter</Text>
            <FormControl mt="5">
              <Box >
                <Box w="100%" d="flex" alignContent="center">
                  <Input
                    borderColor={"white"}
                    _placeholder={{color:'white'}}
                    placeholder="Email Address"
                    type="text"
                    w="80%">
                  </Input>
                  <Button variant={'solid'} borderColor={"white"} >
                   <Text color="#2699FB">OK</Text> 
                  </Button>
                </Box>
              </Box>
            </FormControl>
          </Box>
          </Box>
          <Box d="flex" w="20%" flexDirection="row" justifyContent="center">
          <Box d="flex" flexDirection="column" justifyContent="space-between" >
            <Text>Silicon Valley Road</Text>
            <Text>+23496531778</Text>
            <Text>daventyagency@mail.com</Text>
          </Box>

          </Box>
          
          


        </Box>

      
        </Container>
    </Box>
  )
}

export default Footerbottom


/**
 * 
 * 
 */

const SocialLinks = () => {
  let socialLinks = ['Instagram', 'Facebook', 'Twitter']
  return (
    <>
      {
        socialLinks.map(val => (
          <Box d="flex">
            <Image
              borderRadius={"full"}
              border="1px"
              borderColor="gray.200"
              boxSize="20px"
              mr='6'
              src={`Images/${val.toLowerCase()}.png`}
            />
            <Text>{val}</Text>

          </Box>
        ))

      }
    </>
  )
}