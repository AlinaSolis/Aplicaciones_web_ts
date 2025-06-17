import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const DeleteMovie = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    // Validación de campos
    if (!title.trim()) {
      Alert.alert('Error', 'Por favor ingresa el título de la película a eliminar');
      return;
    }

    // Confirmación de eliminación
    Alert.alert(
      'Confirmar Eliminación',
      `¿Estás seguro de que quieres eliminar la película "${title}"? Esta acción no se puede deshacer.`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            // Aquí iría la lógica para eliminar de MongoDB
            Alert.alert(
              'Eliminado',
              'Película eliminada correctamente',
              [
                {
                  text: 'OK',
                  onPress: () => {
                    // Limpiar formulario
                    setTitle('');
                    setDescription('');
                    setImageUrl('');
                    // Navegar de vuelta al inicio
                    navigation.navigate('Home');
                  }
                }
              ]
            );
          }
        }
      ]
    );
  };

  const handleCancel = () => {
    Alert.alert(
      'Cancelar',
      '¿Estás seguro de que quieres cancelar?',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Sí',
          onPress: () => {
            setTitle('');
            setDescription('');
            setImageUrl('');
            navigation.goBack();
          }
        }
      ]
    );
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Eliminar Película</Text>
          <Text style={styles.warning}>
            ⚠️ Ingresa los datos de la película que deseas eliminar
          </Text>
          
          {/* Campo de Título */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Título de la Película</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: Avengers: Endgame"
              value={title}
              onChangeText={setTitle}
              maxLength={100}
            />
          </View>

          {/* Campo de Descripción (Opcional para verificación) */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Descripción (Opcional)</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Descripción para verificar..."
              value={description}
              onChangeText={setDescription}
              multiline={true}
              numberOfLines={4}
              textAlignVertical="top"
              maxLength={500}
            />
          </View>

          {/* Campo de URL de Imagen (Opcional para verificación) */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>URL de la Imagen (Opcional)</Text>
            <TextInput
              style={styles.input}
              placeholder="https://ejemplo.com/imagen.jpg"
              value={imageUrl}
              onChangeText={setImageUrl}
              keyboardType="url"
              autoCapitalize="none"
            />
          </View>

          {/* Botones */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.deleteButton} onPress={handleSubmit}>
              <Text style={styles.deleteButtonText}>Eliminar Película</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dc3545',
    textAlign: 'center',
    marginBottom: 15,
  },
  warning: {
    fontSize: 16,
    color: '#856404',
    backgroundColor: '#fff3cd',
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#ffeaa7',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  textArea: {
    height: 100,
    paddingTop: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    gap: 15,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#6c757d',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    flex: 1,
    backgroundColor: '#dc3545',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DeleteMovie;