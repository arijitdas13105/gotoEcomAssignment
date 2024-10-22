import axios from 'axios';

const API_KEY='cee036eafe5344d92bf7c5dba410ce48'
const BASE_URL='https://api.themoviedb.org/3'

// Fetch popular movies
export const fetchMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/popular`, {
        params: { api_key: API_KEY },
      });
      return response.data.results; // Return movie list
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  };