import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Input = styled.TextInput`
  border-radius: ${metrics.borderRadius / 2}px;
  border: 1px solid ${colors.lightGrey};

  padding: ${metrics.base}px;

  width: 100%;

  font-family: 'Poppins_400Regular';
`;
