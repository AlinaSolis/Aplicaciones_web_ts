import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// Pantallas
import Home from '../src/screens/Home';
import AddMovie from '../../src/screens/AddMovie';
import EditMovie from '../../src/screens/EditMovie';
import DeleteMovie from '../../src/screens/DeleteMovie';
import MovieDetails from '../../src/screens/MovieDetails';
import Favorites from '../screens/Favorites';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Navegador Drawer con pantallas principales
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: '#f4f4f4', width: 250 },
        headerStyle: { backgroundColor: '#2196F3' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        drawerActiveTintColor: '#2196F3',
        drawerInactiveTintColor: '#666',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: '🏠 Inicio', title: 'Películas' }}
      />
      <Drawer.Screen
        name="AddMovie"
        component={AddMovie}
        options={{ drawerLabel: '➕ Agregar', title: 'Agregar Película' }}
      />
      <Drawer.Screen
        name="EditMovie"
        component={EditMovie}
        options={{ drawerLabel: '✏️ Editar', title: 'Editar Película' }}
      />
      <Drawer.Screen
        name="DeleteMovie"
        component={DeleteMovie}
        options={{ drawerLabel: '🗑️ Eliminar', title: 'Eliminar Película' }}
      />
    </Drawer.Navigator>
  );
}

// Navegador principal (Stack) que incluye Drawer y pantallas adicionales
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Pantalla principal con menú */}
        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />

        {/* Pantallas individuales */}
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{
            title: 'Detalles de la Película',
            headerStyle: { backgroundColor: '#2196F3' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{
            title: 'Películas Favoritas',
            headerStyle: { backgroundColor: '#2196F3' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
