import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather, Ionicons } from '@expo/vector-icons';

import { colors, metrics } from '../styles';
import HomeScreen from '../screens/HomeScreen';
import Header from '../components/Header';
import ChatListScreen from '../screens/ChatListScreen';

const Tab = createBottomTabNavigator();

const NavBar: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case 'Home':
              return (
                <Feather name="home" size={metrics.base * 7} color={color} />
              );
            case 'Chat':
              return (
                <Ionicons
                  name="chatbubbles-outline"
                  size={metrics.base * 7}
                  color={color}
                />
              );
            case 'Meus dados':
              return (
                <Feather name="user" size={metrics.base * 7} color={color} />
              );
            default:
              return;
          }
        },
        tabBarActiveTintColor: colors.purple,
        tabNarInactiveTintColor: colors.grey,
        showLabel: true,
        tabBarLabelStyle: { fontFamily: 'Poppins_500Medium' },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: true,
          header: () => <Header showUserPhoto />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Chat"
        options={{
          headerShown: true,
          header: () => <Header showUserPhoto />,
        }}
        component={ChatListScreen}
      />
      <Tab.Screen
        name="Meus dados"
        options={{
          headerShown: true,
          header: () => <Header showUserPhoto />,
        }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default NavBar;
