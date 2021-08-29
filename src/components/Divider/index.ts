import styled from 'styled-components/native';
import { metrics } from '../../styles';
import { DividerProps } from './interfaces';

export const Divider = styled.View<DividerProps>`
  margin-top: ${(props) => (props.small ? metrics.base : metrics.base * 2)}px;
  margin-bottom: ${(props) =>
    props.small ? metrics.base : metrics.base * 2}px;
`;
