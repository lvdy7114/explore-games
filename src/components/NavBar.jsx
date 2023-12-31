import React from 'react';
import { HStack, IconButton, Image } from '@chakra-ui/react'
import logo from '../assets/logo.jpg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { RepeatIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';



export const NavBar = ({onSearch, onRefresh}) => {
  const handleRefreshClick = () => {
    window.location.reload();
  };
  return (
   <HStack padding='10px'>
   <Link to="/">
    <Image src={logo} boxSize='40px' borderRadius='10px' objectFit='cover' />
   </Link>
    <IconButton
    aria-label='Refresh Icon'
    icon={<RepeatIcon/>}
    onClick={() => {
          handleRefreshClick();
          onRefresh(); // Optionally call the onRefresh function if needed
        }}
    variant='ghost'
    fontSize='lg'
    mr={2}
    />
    <SearchInput onSearch={onSearch} />
    <ColorModeSwitch />
   </HStack>
  )
}
