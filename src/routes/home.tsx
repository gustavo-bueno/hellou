import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';

import ChatScreen from '../screens/ChatScreen';
import ChatListScreen from '../screens/ChatListScreen';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import Header from '../components/Header';
import { colors, metrics } from '../styles';
import PartnerScreen from '../screens/PartnerScreen';
import PartnerListScreen from '../screens/PartnerListScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const NavBar: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case 'Home':
              return (
                <AntDesign name="home" size={metrics.base * 7} color={color} />
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
          headerShown: false,
        }}
        component={UserScreen}
      />
    </Tab.Navigator>
  );
};

const Home: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="NavBar"
      component={NavBar}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ChatDetail"
      component={ChatScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Partner"
      component={PartnerScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PartnerList"
      component={PartnerListScreen}
      options={{
        headerShown: true,
        header: () => <Header showUserPhoto />,
      }}
    />
  </Stack.Navigator>
);

export default Home;
