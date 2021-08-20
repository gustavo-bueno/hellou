import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { IInterest } from '.';

import Button from '../../components/Button';
import { metrics } from '../../styles';

interface InterestContainerProps {
  backgroundColor: string;
}

export const InterestContainer = styled.View<InterestContainerProps>`
  height: ${metrics.hp(20)}px;
  width: ${metrics.wp(40)}px;

  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.backgroundColor};

  border-radius: ${metrics.borderRadius}px;
`;

export const ReadyButton = styled(Button).attrs({
  title: 'Pronto!',
})`
  position: absolute;
  bottom: ${-metrics.hp(15)}px;
  left: ${metrics.base * 3}px;
`;

export const InterestsList = styled(
  FlatList as new () => FlatList<IInterest>
).attrs({
  numColumns: 2,
  columnWrapperStyle: {
    justifyContent: 'space-around',
    paddingHorizontal: metrics.base * 2,
  },
  keyExtractor: (_, idx) => idx.toString(),
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  margin-top: ${metrics.base * 3}px;
`;
