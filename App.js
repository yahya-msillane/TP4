import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailScreen';
import SettingsScreen from './screens/SettingsScreen';
import AppBar from './screens/AppBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// --- Stack Navigation ---
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Accueil" 
        component={HomeScreen} 
      />
      <Stack.Screen 
        name="Details"  
        component={DetailsScreen}  
        options={{ title: 'Mes Détails Personnalisés' }}
      /> 
    </Stack.Navigator>
  );
}

// --- Tab Navigation ---
export default function App() {
  return (
    <NavigationContainer>

      <AppBar /> 

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#f0f0f0' },
          tabBarLabelStyle: { fontSize: 14 },
        }}
      >
        <Tab.Screen 
          name="Maison" 
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen 
          name="Paramètres" 
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>

    </NavigationContainer>
  );
}
