import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

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
    <ul>
    {error && <p>{error}</p>}
    {genres.map(genres => <li key={genres.id}>{genres.name}</li>)}
    </ul>
  )
}

export default GenreList