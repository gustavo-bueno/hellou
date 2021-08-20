import { Image } from 'react-native';
import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

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
