import React from 'react';
import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.jpg';
import ColorModeSwitch from './ColorModeSwitch';



export const NavBar = () => {
  return (
   <HStack justifyContent='space-between' padding='10px'>
    <Image src={logo} boxSize='65px' />
    <ColorModeSwitch />
   </HStack>
  )
}
