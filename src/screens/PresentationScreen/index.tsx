import React from 'react';
import { SafeAreaView } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/routes';

import { H0, H2 } from '../../components/Text';
import { colors } from '../../styles';
import {
  ButtonGradient,
  ButtonTextContainer,
  ChatAnimation,
  Container,
  Content,
  IconContainer,
  SignInButton,
  Wave,
} from './styles';

type PresentationScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Presentation'
>;

const PresentationScreen = () => {
  const { navigate } = useNavigation<PresentationScreenProps>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Container>
        <ChatAnimation />
        <Content>
          <H0 fontWeight="bold">
            Encontrar um english language partner nunca foi tão {'\n'}easy.
          </H0>
          <SignInButton onPress={() => navigate('EnglishLevel')}>
            <ButtonGradient>
              <IconContainer>
                <AntDesign name="google" size={24} color={colors.white} />
              </IconContainer>
              <ButtonTextContainer>
                <H2 color="white" fontWeight="medium">
                  Entrar com o Google
                </H2>
              </ButtonTextContainer>
            </ButtonGradient>
          </SignInButton>
        </Content>
        <Wave />
      </Container>
    </SafeAreaView>
  );
};

export default PresentationScreen;
