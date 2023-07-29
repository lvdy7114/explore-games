import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Button, List, ListItem, Heading, Flex, IconButton } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedGenre, setSelectedGenre } from '../state/gameSlice';
import { RepeatIcon } from '@chakra-ui/icons';

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

    const handleRefreshClick = () => {
        dispatch(setSelectedGenre(null));
    };

  return (
    <>
    <Flex alignItems="center">
    <Heading fontSize='2xl'marginBottom={3}>Genres</Heading>
    <IconButton aria-label='Home Icon'
    icon={<RepeatIcon />}
    onClick={handleRefreshClick}
    variant="ghost"
    fontSize="lg"
    mr={2}
    />
    </Flex>
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