import React from 'react'
import { Box, Heading,Text } from '@chakra-ui/react';
import { isRouteErrorResponse } from 'react-router-dom';


const ErrorPage = ({ error }) => {

  return (
    <>
        <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
        {isRouteErrorResponse(error) 
        ? 'This page does not exist.'
        : 'An unexpected error occured.'}
        </Text>
        </Box>
    </>
  )
}

export default ErrorPage