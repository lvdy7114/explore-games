import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';



const GameGrid = () => {
    const [games,setGames] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await apiClient.get('/games');
                setGames(response.data.results)
            } catch (error) {
                setError('Error fetching games');
            }
        };

        fetchGames();
    }, []);

    return (
        <>
          {error && <p>{error}</p>}
          <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={5}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
          </SimpleGrid>
        </>
    
      );
    };

export default GameGrid