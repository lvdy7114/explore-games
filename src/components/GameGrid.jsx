import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';



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
        <div>
          {error && <p>{error}</p>}
          {games.map((game) => (
            <div key={game.id}>
              <h2>{game.name}</h2>
              {/* Render other game data here */}
            </div>
          ))}
        </div>
    
      );
    };

export default GameGrid