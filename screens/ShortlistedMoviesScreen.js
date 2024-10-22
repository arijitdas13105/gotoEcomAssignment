// ShortlistedMoviesScreen.js
import React from 'react';
import { StyleSheet,View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux'; // Import useSelector for accessing state
import MovieCard from '../components/MovieCard';

const ShortlistedMoviesScreen = () => {
  const shortlistedMovies = useSelector(state => state.shortlisted); // Get shortlisted movies from Redux state
    console.log("shortlistedMovies",shortlistedMovies)
  return (
    <View>
      <FlatList
        data={shortlistedMovies}
        keyExtractor={(item) => item.original_title}
        renderItem={({ item }) => (
            <MovieCard movie={item}  isShortlistView={false} />
        )}
        numColumns={2} // Set the number of columns to 2
                columnWrapperStyle={styles.row} // Style for each row
                contentContainerStyle={styles.listContainer}
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
export default ShortlistedMoviesScreen;
