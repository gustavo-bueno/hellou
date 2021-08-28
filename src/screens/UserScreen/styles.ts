import { TextInput } from 'react-native';
import styled from 'styled-components/native';

import { UserPhoto as Photo } from '../../components/UserPhoto';
import { colors, metrics } from '../../styles';

export const UserPhoto = styled(Photo)`
  margin-top: ${-metrics.hp(6)}px;
  align-self: center;
`;

export const SpaceBetweenContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DescriptionInput = styled(TextInput).attrs({
  multiline: true,
})`
  padding: 4px;
  border-color: ${colors.grey};
  border-width: ${(props) => (props.editable ? 1 : 0)}px;
  color: ${colors.grey};
  font-family: 'Poppins_400Regular';
`;
