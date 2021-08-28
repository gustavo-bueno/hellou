import { Image } from 'react-native';
import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';
import { metrics } from '../../styles';

interface BannerContainerProps {
  color: string;
}

export const BannerContainer = styled.View<BannerContainerProps>`
  background-color: ${(props) => props.color};
  border-radius: ${metrics.borderRadius}px;

  height: ${metrics.hp(25)}px;
  width: ${metrics.wp(80)}px;

  position: relative;

  padding-top: ${metrics.base * 3}px;
  padding-right: ${metrics.base * 3}px;

  flex: 1;

  margin-right: ${metrics.base * 2}px;
`;

export const BannerImage = styled(Image)`
  position: absolute;
  bottom: 0;
  left: ${metrics.base * 2}px;
`;

export const InterestButton = styled(Ripple).attrs({
  rippleContainerBorderRadius: metrics.hp(5),
})<BannerContainerProps>`
  height: ${metrics.hp(8)}px;
  width: ${metrics.hp(8)}px;

  border-radius: ${metrics.hp(5)}px;

  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.color};

  margin-left: ${metrics.base * 2}px;
  margin-right: ${metrics.base * 2}px;
`;

export const InterestButtonContainer = styled.View`
  flex-direction: column;
`;
