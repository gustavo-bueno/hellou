import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';

import { H1 } from '../../components/Text';
import { colors, metrics } from '../../styles';

interface DotButtonProps {
  achieved: boolean;
}

interface ProgressBarProps {
  progress: number;
}

export const TextLevel = styled(H1).attrs({
  fontWeight: 'bold',
})`
  font-size: 48px;
  text-align: center;
  margin-top: ${metrics.base * 3}px;
  margin-bottom: ${metrics.base * 3}px;
`;

export const DotButton = styled(Ripple).attrs({
  rippleContainerBorderRadius: metrics.borderRadius,
})<DotButtonProps>`
  background-color: ${(props) => (props.achieved ? colors.pink : colors.white)};

  width: ${metrics.base * 4}px;
  height: ${metrics.base * 4}px;

  border-width: ${(props) => (props.achieved ? 0 : 1)}px;
  border-color: ${colors.purple};
  border-radius: ${metrics.borderRadius}px;

  padding: 4px;
`;

export const DotContainer = styled.View`
  flex-direction: column;
  justify-content: center;
`;

export const ProgressContainer = styled.View`
  background-color: #bdb3c6;

  width: 100%;
  height: ${metrics.base * 3}px;

  border-radius: ${metrics.borderRadius}px;
  margin-bottom: ${-metrics.hp(2)}px;
`;

export const ProgressBar = styled.View<ProgressBarProps>`
  background-color: ${colors.purple};

  width: ${(props) => props.progress}%;
  height: ${metrics.base * 3}px;

  border-radius: ${metrics.borderRadius}px;
`;
