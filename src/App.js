
import React from 'react'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Header from './components/Header'
import Banner from './components/Banner'
import Popular from './components/Popular'
import Share from './components/Share'
import Advice from './components/Advice'
import Gallery from './components/Gallery'
import Footer from './components/Footer'


import { Box, Image } from '@chakra-ui/react'


const App = () => {
  return (
    < >
        
      <Box backgroundColor={'#EDF0F2'} position="absolute" left="0" top="0" right="0">
     <Header/>
     <Banner/>
     <Popular/>
    
     <Share/>
     <Advice/>
     <Gallery/>
     <Footer/>
     
      </Box>

      {/**Background Image */}
      <Box position="relative" left="0" top="0" bottom="0" right="0" height="100vh" zIndex={"-1"}>
        <Image w="80%" m="auto" objectFit={"cover"} sizes="300" src='' />
      </Box>


    </>
  )
}

export default App