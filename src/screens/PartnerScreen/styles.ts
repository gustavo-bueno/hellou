import styled from 'styled-components/native';

import { UserPhoto as Photo } from '../../components/UserPhoto';
import { metrics } from '../../styles';

export const UserPhoto = styled(Photo)`
  margin-top: ${-metrics.hp(6)}px;
  align-self: center;
`;
