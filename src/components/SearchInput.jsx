import { Input, InputGroup, InputLeftElement, } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useRef } from 'react'

const SearchInput = ({onSearch}) => {
    const ref = useRef(null);

    const handleSearch = (event) => {
        event.preventDefault();
        if(ref.current && onSearch) {
            onSearch(ref.current.value);
        }
    };

  return (
    <form onSubmit={handleSearch}>
        <InputGroup>
        <InputLeftElement children={<SearchIcon />} />
        <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled'  />
        </InputGroup>
    </form>
  )
}

export default SearchInput