import { Image } from 'react-native';
import styled from 'styled-components/native';
import { metrics } from '../../styles';

interface UserPhotoProps {
  size?: 'small' | 'large';
}

export const UserPhoto = styled(Image)<UserPhotoProps>`
  height: ${({ size }) =>
    size === 'large' ? metrics.hp(12) : metrics.hp(6)}px;
  width: ${({ size }) => (size === 'large' ? metrics.hp(12) : metrics.hp(6))}px;

  border-radius: ${({ size }) =>
    size === 'large' ? metrics.hp(6) : metrics.hp(3)}px;
`;
