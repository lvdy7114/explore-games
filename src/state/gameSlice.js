import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../services/api-client';


export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
  const response = await apiClient.get('/games');
  return response.data.results;
});

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    data: [],
    loading: false,
    error: null,
    searchQuery: '',
    selectedGenres: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedGenre: (state, action) => {
      state.selectedGenres = action.payload;
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
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Error fetching games';
      });
  },
});

export const { setSearchQuery, setSelectedGenre } = gamesSlice.actions;

export const selectSearchQuery = (state) => state.games.searchQuery;
export const selectSelectedGenre = (state) => state.games.selectedGenres;

export default gamesSlice.reducer;