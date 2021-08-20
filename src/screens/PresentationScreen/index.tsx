import React from 'react';
import { SafeAreaView } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import Hellou from '../../../assets/hellou.svg';
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

const PresentationScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Container>
        <Hellou />
        <ChatAnimation />
        <Content>
          <H0 fontWeight="bold">
            Encontrar um english language partner nunca foi tão {'\n'}easy.
          </H0>
          <SignInButton>
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
