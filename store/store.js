// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import shortlistedReducer from './shortlistedSlice';

const store = configureStore({
  reducer: {
    shortlisted: shortlistedReducer,
  },
});

export default store;
