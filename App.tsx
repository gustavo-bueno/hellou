import React from 'react';
import { View } from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import PresentationScreen from './src/screens/PresentationScreen';
import EnglishLevelScreen from './src/screens/EnglishLevelScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return <EnglishLevelScreen />;
}
