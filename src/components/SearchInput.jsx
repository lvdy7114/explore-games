import { Input, InputGroup, InputLeftElement, } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../state/gameSlice';
import { useNavigate } from 'react-router-dom';



const SearchInput = () => {
    const ref = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const handleSearch = (event) => {
        event.preventDefault();
        if(ref.current) {
        dispatch(setSearchQuery(ref.current.value));
        navigate('/');
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