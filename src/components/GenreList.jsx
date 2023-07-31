import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { List, ListItem, Heading, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setSelectedGenre } from '../state/gameSlice';

const GenreList = () => {
    const dispatch = useDispatch();
    const [genres, setGenres] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await apiClient.get('/genres');
                setGenres(response.data.results)
            } catch (error) {
                setError('Error fetching genres');
            }
        };

        fetchGenres();
    }, []);

    const handleGenreClick = (genre) => {
        dispatch(setSelectedGenre(genre));
    };

  return (
    <>
    <Heading fontSize='2xl'marginBottom={3}>Genres</Heading>
    <List>
    {error && <p>{error}</p>}
    {genres.map(genres => 
   <ListItem key={genres.id} paddingY='2px'>
    <Box
    as='button'
    _hover={{ bg: 'grey' }}
    _active={{
    bg: 'grey',
    transform: 'scale(0.98)',
    borderColor: 'blue',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
    onClick={() => handleGenreClick(genres)} 
    variant="link">{genres.name}
    </Box>
    </ListItem>
  
    )}
    </List>
    </>
  );
};

export default GenreList