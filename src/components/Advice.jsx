import React from 'react'
import { Box, Image, Link, Button, Text,Textarea, Container, Heading, Divider, Grid, Badge, FormControl, Input } from '@chakra-ui/react'

const Advice = () => {
  return (
    <Box>
      
      <Box width="90%" mx="auto" d="flex" height="800px" >
<Box w="35%"  d="flex">
<Box w="35%" h="100%"  >
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 179 603">
  <text id="CONTACT" transform="translate(145 603) rotate(-90)" fill="#e4003b" font-size="134" font-family="SegoeUI, Segoe UI" letter-spacing="0.03em"><tspan x="0" y="0">CONTACT</tspan></text>
</svg>
</Box>
<Box w="60%" h="100%" d="flex" justifyContent={'center'} alignItems="center" >
<Box w="80%" flexDirection={'column'} justifyContent="flex-end" d="flex" h="50%">
<Box w="100%" fontSize="14px" h="40%" >
Do you want to work together? I am available for collaboration and contracts. I take pride in my work and I know you take pride in yours too</Box>
</Box>
</Box>
</Box>



                               

                               


<Box w="65%"  d="flex">

  <Box w="70%" justifyContent={'center'} alignItems="center" d="flex" >
 
<Box w="80%" h="60%" d="flex" flexDirection={'column'} >
<Box w="100%" h="10%">
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 293 58">
  <text id="HIT_ME_UP_" data-name="HIT ME UP 🤍" transform="translate(0 47)" fill="black" font-size="44" font-family="SegoeUI, Segoe UI" letter-spacing="0.03em"><tspan x="0" y="0">HIT ME UP </tspan><tspan y="0" font-family="SegoeUIEmoji, Segoe UI Emoji">🤍</tspan></text>
</svg>

</Box>
<Box w="100%" d="flex" mb="4px" height="20%" >

<Box p="4" d="flex" alignItems={'center'} w="50%" >

    <Input  
     borderColor={"#E4003B"}
    placeholder="Name"
 type="text"
 w="100%">
  </Input>

</Box>
<Box p="4" d="flex" alignItems={'center'}  w="50%" >

<Input  
 borderColor={"#E4003B"}
placeholder="Email"
 type="text"
 w="100%">
  </Input>

</Box>
</Box>
<Box p="4" w="100%" mb="4px" height="40%" >
<Textarea  placeholder="Tell Me Something"
 type="text"
 w="100%"
 h="100%"
 borderColor={"#E4003B"}
 >
  </Textarea>
</Box>
<Box d="flex" justifyContent="center">
<Button px="40px" variant={'solid'}  _hover={{backgroundColor:'red'}} rounded="full"  color="white" backgroundColor={'#E4003B'} >Send</Button>
</Box>

</Box>

  </Box>
  <Box d="flex" justifyContent="flex-end" width="30%" >
<Box d="flex" flexDirection={'column'} justifyContent="center"  w="40%">
<Box w="100%" h="70%" >
  <Text as="h3" fontSize="4xl" textAlign={'center'}>WEB</Text> 

  <Box w="40%" h="2px" background={'#E4003B'}>

  </Box>
</Box>
</Box>
  </Box>

</Box>
      </Box>
    </Box>
  )
}

export default Advice