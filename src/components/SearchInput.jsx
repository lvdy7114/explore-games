import { Input, InputGroup, InputLeftElement, } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../state/gameSlice';



const SearchInput = () => {
    const ref = useRef(null);
    const dispatch = useDispatch();
    

    const handleSearch = (event) => {
        event.preventDefault();
        if(ref.current) {
        dispatch(setSearchQuery(ref.current.value));
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