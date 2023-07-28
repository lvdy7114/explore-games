import React from 'react';
import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.jpg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';



export const NavBar = ({onSearch}) => {
  return (
   <HStack padding='10px'>
    <Image src={logo} boxSize='40px' borderRadius='10px' />
    <SearchInput onSearch={onSearch} />
    <ColorModeSwitch />
   </HStack>
  )
}
