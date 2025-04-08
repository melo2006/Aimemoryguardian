
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import MusicScreen from './src/screens/MusicScreen';
import WordScreen from './src/screens/WordScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AI Memory Mate Chat" component={ChatScreen} />
        <Stack.Screen name="Music Memory Exercise" component={MusicScreen} />
        <Stack.Screen name="Word & Sentence Exercise" component={WordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
