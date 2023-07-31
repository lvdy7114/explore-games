import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../services/api-client';


export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
  const response = await apiClient.get('/games');
  return response.data.results;
});

export const fetchGameById = createAsyncThunk('games/fetchGameById', async (id) => {
  const response = await apiClient.get(`/games/${id}`);
  return response.data;
});


const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    data: [],
    loading: false,
    error: null,
    searchQuery: '',
    selectedGenres: null,
  currentGame: {
    name: '', 
    released: '', 
    details: '',
    background_image_additional: '',
    esrb_rating: '',
  },
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedGenre: (state, action) => {
      state.selectedGenres = action.payload;
    },
    setGameDetails: (state, action) => {
      const {
        name,
        details,
        released,
        background_image_additional,
        esrb_rating,
      } = action.payload;
      state.currentGame.name = name;
      state.currentGame.details = details;
      state.currentGame.released = released;
      state.currentGame.background_image_additional = background_image_additional;
      state.currentGame.esrb_rating = esrb_rating;
  },
},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchGameById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentGame = action.payload; 
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Error fetching games';
      })
  },
});

export const { setSearchQuery, setSelectedGenre } = gamesSlice.actions;

export const selectSearchQuery = (state) => state.games.searchQuery;
export const selectSelectedGenre = (state) => state.games.selectedGenres;

export default gamesSlice.reducer;