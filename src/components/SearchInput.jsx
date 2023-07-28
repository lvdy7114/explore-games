import { Input, InputGroup, InputLeftElement, } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchInput = () => {
  return (
    <InputGroup>
    <InputLeftElement children={<SearchIcon />} />
    <Input borderRadius={20} placeholder='Search games...' variant='filled'  />
    </InputGroup>
  )
}

export default SearchInput