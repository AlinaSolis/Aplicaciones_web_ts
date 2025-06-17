import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {
  const [movies, setMovies] = useState([
    {
      id: '1',
      title: 'Interstellar',
      description: 'Viaje espacial entre dimensiones.',
      image: require('../../assets/inter.png'),
    },
    {
      id: '2',
      title: 'Avatar',
      description: 'Un mundo lleno de color y vida.',
      image: require('../../assets/avatar.png'),
    },
    {
      id: '3',
      title: 'Inception',
      description: 'Sueños dentro de sueños.',
      image: require('../../assets/inception.png'),
    },
    {
      id: '4',
      title: 'Joker',
      description: 'Una mente compleja y oscura.',
      image: require('../../assets/joker.png'),
    },
    {
      id: '5',
      title: 'Matrix',
      description: 'La realidad no es lo que parece.',
      image: require('../../assets/matrix.png'),
    },
    {
      id: '6',
      title: 'The Batman',
      description: 'El caballero oscuro regresa.',
      image: require('../../assets/batman.png'),
    },
    {
      id: '7',
      title: 'Avengers: Endgame',
      description: 'La batalla final de los héroes.',
      image: require('../../assets/endgame.png'),
    },
    {
      id: '8',
      title: 'Spiderman',
      description: 'Un gran poder conlleva una gran responsabilidad.',
      image: require('../../assets/spiderman.png'),
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const toggleFavorite = (movie) => {
    const isFavorite = favoriteMovies.some(fav => fav.id === movie.id);
    if (isFavorite) {
      setFavoriteMovies(favoriteMovies.filter(fav => fav.id !== movie.id));
    } else {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.movieCard}
      onPress={() => {
        navigation.navigate('MovieDetails', {
          title: item.title,
          description: item.description,
          image: item.image,
          id: item.id,
        });
      }}
    >
      <Image source={item.image} style={styles.movieImage} />
      <View style={styles.movieInfo}>
        <View style={{ flex: 1 }}>
          <Text style={styles.movieTitle}>{item.title}</Text>
          <Text style={styles.movieDescription} numberOfLines={3}>
            {item.description}
          </Text>
        </View>
        <TouchableOpacity onPress={() => toggleFavorite(item)}>
          <Ionicons
            name={
              favoriteMovies.some((fav) => fav.id === item.id)
                ? 'star'
                : 'star-outline'
            }
            size={24}
            color="#FFD700"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar películas..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <TouchableOpacity
        style={styles.favButton}
        onPress={() =>
          navigation.navigate('Favorites', {
            favoriteMovies,
            toggleFavorite,
          })
        }
      >
        <Text style={styles.favButtonText}>Ver Favoritos</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredMovies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  searchInput: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  favButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  favButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 20,
  },
  movieCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  movieImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  movieInfo: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    gap: 10,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  movieDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default Home;
