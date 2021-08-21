import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';

import { Container as PaddingHorizontalContainer } from '../../components/Container';
import UserCard from '../../components/UserCard';
import { colors, metrics } from '../../styles';

interface UserMessageProps {
  isReceived: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;

  padding-top: ${metrics.hp(5)}px;
  padding-bottom: ${metrics.base * 4}px;
`;

export const Content = styled(PaddingHorizontalContainer)`
  flex: 1;
  padding-top: ${metrics.base * 2}px;
`;

export const Input = styled.TextInput`
  border-radius: ${metrics.borderRadius / 2}px;

  height: ${metrics.hp(6)}px;
  width: 100%;

  border: 1px solid ${colors.grey};
`;

export const InputContainer = styled.View`
  flex-direction: row;
`;

export const SendButton = styled(Ripple).attrs({
  rippleContainerBorderRadius: metrics.borderRadius / 2,
})`
  border-radius: ${metrics.borderRadius / 2}px;
  background-color: ${colors.purple};

  width: ${metrics.hp(6)}px;
  height: ${metrics.hp(6)}px;

  margin-left: ${-metrics.hp(6) - 1}px;

  justify-content: center;
  align-items: center;
`;

export const UserMessage = styled.View<UserMessageProps>`
  background-color: ${(props) =>
    props.isReceived ? colors.pink : colors.purple};
  align-self: ${(props) => (props.isReceived ? 'flex-start' : 'flex-end')};

  padding: ${metrics.base * 2}px;
  border-radius: ${metrics.borderRadius / 2}px;

  max-width: ${metrics.wp(50)}px;

  margin-bottom: ${metrics.base * 2}px;
`;
