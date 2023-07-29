import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import { fetchGames, selectSearchQuery, selectSelectedGenre } from '../state/gameSlice';



const GameGrid = () => {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.games.data);
    const error = useSelector((state) => state.games.error);
    const searchQuery = useSelector(selectSearchQuery);
    const selectedGenre = useSelector(selectSelectedGenre);

    useEffect(() => {
        dispatch(fetchGames());
      }, [dispatch]);

      if (error) return <Text>{error}</Text>;

      //filter games based on search query and selected genre
      const filteredGames = games.filter((game) => {
      const nameIncludesQuery = game.name.toLowerCase().includes(searchQuery.toLowerCase());
      if (selectedGenre) {
        return nameIncludesQuery && game.genres.some((genre) => genre.name === selectedGenre.name);
      } else {
        return nameIncludesQuery;
      }
    });

    if (filteredGames.length === 0) {
      return <Text>Games are not available based on your search query and/or selected genre.</Text>
    }

      return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px' spacing={5}>
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      );
    };
    export default GameGrid;