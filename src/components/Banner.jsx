import React from 'react'
import { Box, Image, Link, Button, Text, Container, Heading, Divider, Grid, Badge, FormControl, Input } from '@chakra-ui/react'
import youtube from '../assets/darkyoutube.png'
import twitter from '../assets/darktwitter.png'
import facebook from '../assets/darkfacebook.png'
import arrow from '../assets/arrow.png'
import HomeImage from '../assets/ME3_1469.png'
import me from '../assets/me.png'
const Banner = () => {
  return (
    <Box backgroundColor={'#EDF0F2'}>
      <Box d="flex" h="900px" w="100%" >
        <Box w="30%" d="flex" position={'relative'} justifyContent="center" alignItems={'center'} h="100%">
          <Box w="80%" h="80%" d="flex" >
            <Box d="flex" flexDirection={'column'} h="100%" w="30%">
              <Box h="60%" position={'relative'} d="flex" flexDirection={'row'} w="100%" justifyContent="flex-end" >
                <Box w="50%" h="100%"  >
                  <Box w="100%" h="100%">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 67 393">
                      <text id="Full_Stack_Developer" data-name="Full Stack Developer" transform="translate(0 393) rotate(-90)" fontSize="39" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="42">Full Stack Developer</tspan></text>
                    </svg>

                  </Box>
                </Box>
              </Box>
              <Box h="40%" d="flex" justifyContent={'end'} w="100%" >
                <Box w="50%" h="100%" d="flex" flexDirection={'column'} justifyContent="flex-end">
                  <Box w="100%" h="50%" >
                    <Box d="flex" justifyContent={'center'} alignItems="center" height={"25%"} w="100%">
                      <Image borderRadius={'full'} src={facebook} height="30px" w="30px"></Image>
                    </Box>
                    <Box d="flex" justifyContent={'center'} alignItems="center" height={"25%"} w="100%">
                      <Image borderRadius={'full'} src={twitter} height="30px" w="30px"></Image>
                    </Box>
                    <Box d="flex" justifyContent={'center'} alignItems="center" height={"25%"} w="100%">
                      <Image borderRadius={'full'} src={youtube} height="30px" w="30px"></Image>
                    </Box>
                  </Box>

                </Box>
              </Box>
            </Box>
            {/****/}
            <Box w="70%" h="100%" d="flex" flexDir={'column'}>
              <Box w="100%" h="60%">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 276 534">
  <text id="DOKS_CODERS" data-name="DOKS
CODERS" fill="#e4003b" font-size="100" font-family="SegoeUI, Segoe UI"><tspan x="0" y="108">DOKS</tspan><tspan font-size="70"><tspan x="0" y="238">CODERS</tspan></tspan></text>
</svg>


              </Box>
              <Box zIndex={'2'} d="flex" justifyContent={'center'} w="100%" h="40%">
                <Box lineHeight={'40px'} w="80%">
                  <Text >
                    I develop Websites and Web Applications using Javascript, CSS and HTML. I am quite familiar with frameworks such as React and Vue. My backend is done using Nodejs and Express
                  </Text>

                </Box>
              </Box>
            </Box>
          </Box>
          <Box w="80%" h="80%" flexDirection={'column'} justifyContent={'flex-end'} d="flex" position={'absolute'} zIndex="1" >
            <Box d="flex" justifyContent={'flex-end'} height="35%" w="100%">
              <Box w="40%" h="100%">
                <Image height="100%" w={"100%"} src={arrow}></Image>
              </Box>
            </Box>
          </Box>

        </Box>
        <Box w="70%" d="flex" h="100%" >
          <Box h="100%" w="80%">
            <Image borderRadius={'20%'} objectFit={'cover'} height="100%" w={"100%"} src={HomeImage}></Image>
          </Box>
          <Box d="flex" flexDirection={'column'} justifyContent="center" h="100%" w="20%">
            <Box d="flex" w="100%" flexDirection={'row'} justifyContent="flex-end">
              <Box d="flex" w="50%" flexDirection={'column'} >
                <Box my="15px" textAlign="center">
                  <Heading fontSize="3.5rem">01</Heading>
                  <Box w="60%" h="2px" background={'red'} ></Box>
                </Box>
                <Box my="15px" textAlign="center">
                  02
                </Box>
                <Box my="15px" textAlign="center">
                  03
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}

export default Banner
/*transform={`rotate(270deg)`}*/