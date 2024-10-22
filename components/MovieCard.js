
// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { addMovie } from '../store/shortlistedSlice'; // Import the action


// export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

// export default function MovieCard({ movie , isShortlistView}) {
//     const dispatch = useDispatch();

  

//   const handleShortlist = () => {
//     console.log("shortlisted movies", movie);
//     dispatch(addMovie(movie)); // Dispatch action to add movie to shortlist
//   };
//   return (
//     <TouchableOpacity style={styles.card}>
//       <Image
//         // source={{ uri:`${IMG_CDN_URL}${movie.backdrop_path}`  }}  // Assuming you want to display the poster image
//         source={{ uri:IMG_CDN_URL+movie.backdrop_path  }}  // Assuming you want to display the poster image
//         style={styles.image}
//         resizeMode="cover"
//       />
//       <View style={styles.infoContainer}>
//         <Text style={styles.title}>{movie.original_title}</Text>
//         <Text style={styles.overview} numberOfLines={3}>{movie.overview}</Text>
//         <Text style={styles.releaseDate}>{`Release Date: ${movie.release_date}`}</Text>
//         <Text style={styles.voteAverage}>{`Rating: ${movie.vote_average}/10`}</Text>
       
//         {isShortlistView && ( // Conditionally render the shortlist button
//           <TouchableOpacity style={styles.shortlistButton} onPress={handleShortlist}>
//             <Text style={styles.buttonText}>Shortlist</Text>
//           </TouchableOpacity>
//         )}
        
//       </View>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 4,
//     margin: 10,
//     overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     height: 200,
//   },
//   infoContainer: {
//     padding: 10,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   overview: {
//     fontSize: 14,
//     color: '#666',
//     marginVertical: 5,
//   },
//   releaseDate: {
//     fontSize: 12,
//     color: '#999',
//   },
//   voteAverage: {
//     fontSize: 12,
//     color: '#ff9800',
//     fontWeight: 'bold',
//   },
// });


// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { addMovie } from '../store/shortlistedSlice';

// export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

// export default function MovieCard({ movie, isShortlistView }) {
//     const dispatch = useDispatch();

//     const handleShortlist = () => {
//         console.log("shortlisted movies", movie);
//         dispatch(addMovie(movie));
//     };

//     return (
//         <TouchableOpacity style={styles.card}>
//             <Image
//                 source={{ uri: IMG_CDN_URL + movie.backdrop_path }}
//                 style={styles.image}
//                 resizeMode="cover"
//             />
//             <View style={styles.infoContainer}>
//                 <Text style={styles.title}>{movie.original_title}</Text>
//                 <Text style={styles.overview} numberOfLines={3}>{movie.overview}</Text>
//                 <View style={styles.detailsContainer}>
//                     <Text style={styles.releaseDate}>{`Release Date: ${movie.release_date}`}</Text>
//                     <Text style={styles.voteAverage}>{`Rating: ${movie.vote_average}/10`}</Text>
//                 </View>
//                 {isShortlistView && (
                    // <TouchableOpacity style={styles.shortlistButton} onPress={handleShortlist}>
                    //     <Text style={styles.buttonText}>Shortlist</Text>
                    // </TouchableOpacity>
//                 )}
//             </View>
//         </TouchableOpacity>
//     );
// }

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: '#fff',
//         borderRadius: 12,
//         elevation: 4,
//         margin: 10,
//         overflow: 'hidden',
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowRadius: 6,
//         shadowOffset: { width: 0, height: 2 },
//     },
//     image: {
//         width: '100%',
//         height: 220,
//     },
//     infoContainer: {
//         padding: 15,
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//         marginBottom: 5,
//     },
//     overview: {
//         fontSize: 15,
//         color: '#666',
//         marginVertical: 5,
//     },
//     detailsContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginVertical: 5,
//     },
//     releaseDate: {
//         fontSize: 12,
//         color: '#999',
//     },
//     voteAverage: {
//         fontSize: 12,
//         color: '#ff9800',
//         fontWeight: 'bold',
//     },
//     shortlistButton: {
//         marginTop: 10,
//         backgroundColor: '#ff4081',
//         paddingVertical: 8,
//         paddingHorizontal: 12,
//         borderRadius: 25,
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//         textTransform: 'uppercase',
//     },
// });



import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addMovie ,removeMovie} from '../store/shortlistedSlice';
import Entypo from "react-native-vector-icons/Entypo";
import Icon from 'react-native-vector-icons/FontAwesome'; 

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie, isShortlistView }) {
    const dispatch = useDispatch();
    const [isShortlisted, setIsShortlisted] = useState(false); 

    const handleShortlist = () => {
        setIsShortlisted(!isShortlisted);
        console.log("shortlisted movies", movie);
        // dispatch(addMovie(movie));
        if (!isShortlisted) {
            dispatch(addMovie(movie)); // Dispatch action to add movie to shortlist
        } else {
            // If you have a remove action, dispatch it here to remove the movie from shortlist
            // dispatch(removeMovie(movie.id)); 
            dispatch(removeMovie(movie));
        }
    };

    return (
        <TouchableOpacity style={styles.card}>
            <Image
                source={{ uri: IMG_CDN_URL + movie.backdrop_path }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.overview} numberOfLines={3}>{movie.overview}</Text>
                <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
                <Text style={styles.voteAverage}>Rating: {movie.vote_average}/10</Text>

                {isShortlistView && (
                    <TouchableOpacity style={styles.shortlistButton} onPress={handleShortlist}>
                        {/* <Entypo name={"heart-outlined"}  size={30} /> */}
                        <Entypo name={isShortlisted ? "heart" : "heart-outlined"} size={30} color={isShortlisted ? "#ff4081" : "#666"} />

                    </TouchableOpacity>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 4,
        margin: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        flex: 1, // Ensures the card takes full width in the column
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    infoContainer: {
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    overview: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
    },
    releaseDate: {
        fontSize: 12,
        color: '#999',
    },
    voteAverage: {
        fontSize: 12,
        color: '#ff9800',
        fontWeight: 'bold',
    },
    shortlistButton: {
        backgroundColor: '#f0f0f0',
        borderRadius: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 2,
    },
});
