import React, { useContext } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import HomeRoutes from './home';
import AuthenticationRoutes from './authentication';
import { UserContext } from '../contexts/userContext';

import { colors } from '../styles';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};

const Routes: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer theme={MyTheme}>
      {user ? <HomeRoutes /> : <AuthenticationRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
