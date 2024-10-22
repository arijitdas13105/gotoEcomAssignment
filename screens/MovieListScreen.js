// import {View, Text,FlatList} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {fetchMovies} from '../services/api';
// import MovieCard from '../components/MovieCard';

// const MovieListScreen = ({ shortlistedMovies, onShortlist }) => {
//     const [movies, setMovies] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const loadMovies = async () => {
//         try {
//           const data = await fetchMovies();
//           const movieTitles = data.map(movie => movie.original_title);
//           console.log(movieTitles);  // This will log only the titles
          
//           setMovies(movieTitles);  
//           setLoading(false);
//         } catch (err) {
//           setError(err);
//           setLoading(false);
//         }
//       };
  
//       loadMovies();
//     }, []);
//   return (
//     <View>
//      <FlatList 
//          data={movies}
//          keyExtractor={(item) => item}
//          renderItem={({item})=>(
//             <MovieCard movie={item}  />
//          )}
//      />
//     </View>
//   );
// };

// export default MovieListScreen;



import {View, Text,FlatList,StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchMovies} from '../services/api';
import MovieCard from '../components/MovieCard';

const MovieListScreen = ({ shortlistedMovies, onShortlist }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const loadMovies = async () => {
        try {
          const data = await fetchMovies();
          const movieTitles = data.map(movie => movie.original_title);
          console.log(movieTitles);  // This will log only the titles
          
          setMovies(data);  
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
  
      loadMovies();
    }, []);
  return (
    <View>
     <FlatList 
         data={movies}
         keyExtractor={(item) => item.original_title}
         renderItem={({ item }) => (
                    <MovieCard movie={item} isShortlistView={true} />
                )}
                numColumns={2} // Set the number of columns to 2
                columnWrapperStyle={styles.row} // Style for each row
                contentContainerStyle={styles.listContainer} // Additional styles for the FlatList
                // key="movieGrid" // Additional styles for the FlatList
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5', // Background color for the screen
    },
    row: {
        justifyContent: 'space-between', // Space between the items in each row
    },
    listContainer: {
        paddingBottom: 20, // Padding at the bottom of the list
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MovieListScreen;