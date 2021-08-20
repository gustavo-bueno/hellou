import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
  flex-direction: row;
  padding: ${metrics.base * 3}px;

  align-items: center;

  border-radius: ${metrics.borderRadius / 2}px;

  border: 1px solid ${colors.grey};

  width: 100%;
`;
