import React from 'react'
import { Box, Image, Link, Button, Text, Container, Heading, Divider, Grid, Badge, FormControl, Input } from '@chakra-ui/react'

import Timeline from "./PrimeComponents/Timeline"
const Share = () => {
  return (
    <Box h="900px" mt="40px" d="flex" w="100%" justifyContent="center">
    <Box w="90%" d="flex">
    <Box w="38%" d="flex" position="relative" justifyContent={'center'} alignItems="center" >
      <Box w="60%" h="80%" d="flex" flexDirection={'column'} justifyContent="center" >
<Text fontSize={'17px'}>TEAMWORK</Text>
<Text color="red" fontSize={'100px'}>100%</Text>
<Text fontSize={'55px'}>You  <span style={{color:'red'}}>Design</span> </Text>
<Text fontSize={'55'}>I <span style={{color:'red'}}>Code</span>  </Text>

      </Box>
      <Box zIndex={'4'} w="50%" mr="-100px" h="120%" >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 465.735 1341">
  <text id="JAVASCRIPT_FAN" data-name="JAVASCRIPT FAN" transform="translate(188 1341) rotate(-90)" fill="#fff" font-size="174" font-family="SegoeUI, Segoe UI" letter-spacing="0.03em"><tspan x="0" y="0">JAVASCRIPT FAN</tspan></text>
  <g id="ico_art" transform="translate(230.5 1150.333)">
    <line id="Line_10" data-name="Line 10" x2="75.583" y2="75.583" transform="translate(151.167)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="12"/>
    <line id="Line_11" data-name="Line 11" y1="75.583" x2="75.583" transform="translate(151.167 75.583)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="12"/>
    <line id="Line_12" data-name="Line 12" x2="226.75" transform="translate(0 75.583)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="12"/>
    <g id="ico_arrow" transform="translate(108.651 28.344)">
      <line id="Line_10-2" data-name="Line 10" x2="47.24" y2="47.24" transform="translate(4.724)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="12"/>
      <line id="Line_11-2" data-name="Line 11" y1="47.24" x2="51.964" transform="translate(0 47.24)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="12"/>
    </g>
  </g>
</svg>

      </Box>
    </Box>
    <Box position="relative" w="63%" >
<Image objectFit="cover" src="Images/work.png" width="100%" height="100%"/>
<Box justifyContent={'center'} backgroundColor="#2a262673" alignItems="center" d="flex" top="0" position="absolute" width="100%" height="100%">
<Box justifyContent={'center'} alignItems="center" d="flex" width={'65%'} height="80%" border={'30px solid #E4003B;'} >
<Box w="90%">
<Text fontSize={'40px'} fontWeight="black" color="white">NEED A FRONTEND DEVELOPER?</Text>
<Text fontSize="36px" my="35px" color="white">Let's work together on a project!</Text>
</Box>

</Box>
</Box>

    </Box>
    </Box>
    
    </Box>
  )
}

export default Share