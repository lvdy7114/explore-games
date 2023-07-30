import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Button, List, ListItem, Heading, Flex, IconButton } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedGenre, setSelectedGenre } from '../state/gameSlice';


const GenreList = () => {
    const dispatch = useDispatch();
    const selectedGenre = useSelector(selectSelectedGenre);
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
    <Button onClick={() => handleGenreClick(genres)} 
    variant="link">{genres.name}</Button>
    </ListItem>
    )}
    </List>
    </>
  );
};

export default GenreList