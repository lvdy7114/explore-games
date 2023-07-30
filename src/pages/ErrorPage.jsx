import React from 'react'
import { NavBar } from '../components/NavBar';
import { Box, Heading,Text } from '@chakra-ui/react';


const ErrorPage = () => {
   
  return (
    <>
        <NavBar />
        <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>An unexpected error occurred.</Text>
        </Box>
    </>
  )
}

export default ErrorPage