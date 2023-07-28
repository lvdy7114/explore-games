import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Button, List, ListItem } from '@chakra-ui/react';

const GenreList = () => {
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

  return (
    <List>
    {error && <p>{error}</p>}
    {genres.map(genres => 
    <ListItem key={genres.id} paddingY='2px'>
    <Button onClick={() => console.log(genres)} variant='link'>{genres.name}</Button></ListItem>)}
    </List>
  )
}

export default GenreList