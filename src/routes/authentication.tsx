import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../components/Header';
import EnglishLevelScreen from '../screens/EnglishLevelScreen';
import PresentationScreen from '../screens/PresentationScreen';
import InterestsScreen from '../screens/InterestsScreen';
import DescriptionScreen from '../screens/DescriptionScreen';

const Stack = createNativeStackNavigator();

const Authentication: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: true,
        header: () => <Header />,
      }}
      name="Presentation"
      component={PresentationScreen}
    />
    <Stack.Screen
      options={{
        headerShown: true,
        header: () => <Header />,
      }}
      name="EnglishLevel"
      component={EnglishLevelScreen}
    />
    <Stack.Screen
      options={{
        headerShown: true,
        header: () => <Header />,
      }}
      name="Interests"
      component={InterestsScreen}
    />
    <Stack.Screen
      options={{
        headerShown: true,
        header: () => <Header />,
      }}
      name="Description"
      component={DescriptionScreen}
    />
  </Stack.Navigator>
);

export default Authentication;
