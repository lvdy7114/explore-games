import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import { fetchGames, selectSearchQuery } from '../state/gameSlice';



const GameGrid = () => {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.games.data);
    const error = useSelector((state) => state.games.error);
    const searchQuery = useSelector(selectSearchQuery);

    useEffect(() => {
        dispatch(fetchGames());
      }, [dispatch]);

      if (error) return <Text>{error}</Text>;

      //filter games based on search query
      const filteredGames = games.filter((game) => 
      game.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px' spacing={5}>
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      );
    };
    export default GameGrid;