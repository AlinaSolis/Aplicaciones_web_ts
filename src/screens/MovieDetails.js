import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

export default function MovieDetails({ route }) {
  const { title, description, image } = route.params;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleRating = (value) => setRating(value);

  const handleCommentSubmit = () => {
    if (!comment.trim()) return;
    setCommentsList((prev) => [...prev, comment]);
    setComment('');
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentItem}>
      <Ionicons name="chatbubble-outline" size={20} color="#6200EE" />
      <Text style={styles.commentText}>{item}</Text>
    </View>
  );

  return (
    <Animatable.View animation="fadeIn" duration={1000} style={styles.container}>
      <FlatList
        data={commentsList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderComment}
        contentContainerStyle={styles.scroll}
        ListHeaderComponent={
          <>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>

            <View style={styles.starsContainer}>
              <Text style={styles.sectionTitle}>Califica esta película:</Text>
              <View style={styles.stars}>
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <TouchableOpacity key={index} onPress={() => handleRating(index + 1)}>
                      <Ionicons
                        name={index < rating ? 'star' : 'star-outline'}
                        size={28}
                        color="#FFD700"
                      />
                    </TouchableOpacity>
                  ))}
              </View>
            </View>

            <View style={styles.commentSection}>
              <Text style={styles.sectionTitle}>Escribe un comentario:</Text>
              <TextInput
                style={styles.input}
                placeholder="Escribe aquí tu comentario..."
                value={comment}
                onChangeText={setComment}
                multiline
              />
              <TouchableOpacity style={styles.button} onPress={handleCommentSubmit}>
                <Text style={styles.buttonText}>Guardar comentario</Text>
              </TouchableOpacity>

              <Text style={styles.sectionTitle}>Comentarios:</Text>
            </View>
          </>
        }
      />
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { padding: 20 },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  description: {
    fontSize: 16,
    color: '#666',
    marginVertical: 12,
    textAlign: 'justify',
  },
  starsContainer: { marginTop: 20 },
  stars: { flexDirection: 'row', marginVertical: 10 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  commentSection: { marginTop: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    fontSize: 15,
    backgroundColor: '#f9f9f9',
    textAlignVertical: 'top',
    minHeight: 80,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: { color: '#fff', fontSize: 16 },
  commentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    gap: 8,
  },
  commentText: { fontSize: 14, color: '#444', flex: 1 },
});
