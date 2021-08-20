import styled from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import { colors, metrics } from '../../styles';

export const CustomButton = styled(Ripple).attrs({
  rippleContainerBorderRadius: metrics.borderRadius / 2,
})`
  background-color: ${colors.purple};

  width: 100%;
  padding-top: ${metrics.base * 3}px;
  padding-bottom: ${metrics.base * 3}px;

  justify-content: center;
  align-items: center;

  border-radius: ${metrics.borderRadius / 2}px;
`;
