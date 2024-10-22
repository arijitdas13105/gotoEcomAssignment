// store/shortlistedSlice.js
import { createSlice } from '@reduxjs/toolkit';

const shortlistedSlice = createSlice({
  name: 'shortlisted',
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      // Add movie to the shortlist if not already present
      const movieExists = state.some(movie => movie.id === action.payload.id); 
    //   if (!state.includes(action.payload)) {
    //     state.push(action.payload);
    //   }
    if (!movieExists) {
        state.push(action.payload);
      }
    },
    removeMovie: (state, action) => {
      // Remove movie from the shortlist
      return state.filter(movie => movie.id !== action.payload.id); // Use the movie ID for comparison
    },
  },
});

export const { addMovie, removeMovie } = shortlistedSlice.actions;
export default shortlistedSlice.reducer;
