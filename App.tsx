import React from "react";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { UserProvider } from "./src/contexts/userContext";
import SplashScreen from "./src/screens/SplashScreen";
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/variables/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </UserProvider>
  );
}
