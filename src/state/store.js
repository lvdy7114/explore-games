import { configureStore } from '@reduxjs/toolkit';
import  gamesReducer from '../state/gameSlice';


const store = configureStore({
    reducer: {
    games: gamesReducer,
    },
});

export default store;