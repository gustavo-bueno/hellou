import styled from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import AnimatedLottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';

import waveSvg from '../../../assets/wave.svg';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
  position: relative;
  flex: 1;

  padding-left: ${metrics.base * 3}px;
  padding-right: ${metrics.base * 3}px;
  padding-top: ${metrics.hp(5)}px;
`;

export const Wave = styled(waveSvg).attrs({
  width: metrics.wp(100),
  height: metrics.hp(15),
})`
  position: absolute;
  bottom: 0px;
`;

export const SignInButton = styled(Ripple).attrs({
  rippleContainerBorderRadius: metrics.borderRadius,
})`
  width: 100%;
  height: ${metrics.hp(6)}px;

  border-radius: ${metrics.borderRadius}px;

  margin-top: ${metrics.base * 3}px;
`;

export const IconContainer = styled.View`
  height: 100%;
  width: 15%;

  justify-content: center;
  align-items: center;

  border: 0px solid ${colors.white};
  border-right-width: 1px;
`;

export const ButtonTextContainer = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const ChatAnimation = styled(AnimatedLottieView).attrs({
  autoPlay: true,
  loop: true,
  source: require('../../../assets/lottie/chat.json'),
})`
  position: absolute;
  right: ${-metrics.hp(10)}px;
  top: ${-metrics.hp(15)}px;
`;

export const Content = styled.View`
  height: ${metrics.hp(80)}px;

  justify-content: flex-end;
`;

export const ButtonGradient = styled(LinearGradient).attrs({
  start: [0, 0],
  end: [1, 0],
  colors: [colors.purple, colors.pink],
})`
  flex: 1;
  border-radius: ${metrics.borderRadius}px;
  flex-direction: row;
`;
