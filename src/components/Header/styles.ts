import { Image } from 'react-native';
import styled from 'styled-components/native';
import { metrics } from '../../styles';

export const Container = styled.View`
  height: ${metrics.hp(12)}px;

  padding-left: ${metrics.base * 3}px;
  padding-right: ${metrics.base * 3}px;
  padding-bottom: ${metrics.base * 3}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
