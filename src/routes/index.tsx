import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../components/Header';
import EnglishLevelScreen from '../screens/EnglishLevelScreen';
import PresentationScreen from '../screens/PresentationScreen';
import InterestsScreen from '../screens/InterestsScreen';
import HomeScreen from '../screens/HomeScreen';

import { colors } from '../styles';
import NavBar from './navbar';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};

const Routes: React.FC = () => (
  <NavigationContainer theme={MyTheme}>
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
        name="Home"
        component={NavBar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatDetail"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
