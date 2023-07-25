import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.jpg';


export const NavBar = () => {
  return (
   <HStack>
    <Image src={logo} boxSize='65px' />
    <Text>NavBar</Text>
   </HStack>
  )
}
