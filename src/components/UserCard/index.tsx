import React from 'react';
import Ripple from 'react-native-material-ripple';

import { Ionicons } from '@expo/vector-icons';

import { UserCardProps } from './interfaces';
import { H2 } from '../Text';
import { UserPhoto } from '../UserPhoto';
import { Container } from './styles';
import { colors, metrics } from '../../styles';
import { useNavigation } from '@react-navigation/native';

const UserCard = ({ backButton = false }: UserCardProps) => {
  const { goBack } = useNavigation();

  return (
    <Container>
      {backButton && (
        <Ripple onPress={() => goBack()} style={{ marginRight: metrics.base }}>
          <Ionicons name="arrow-back-outline" size={24} color={colors.purple} />
        </Ripple>
      )}
      <UserPhoto
        source={{
          uri: 'https://www.facebook.com/profile/pic.php?cuid=AYjeZZgTfxNIrbTj03X3_w1Rvz9Kdq98mTVr01FTxWIm0L4teDGDWo4WH1zQDRKQJH30FBBL5NxU2-f3CYHwlnW-TY2jIBGcDEoMdBkVZ1LM_kBp7pbNnKKSPYoepP1bwrqRz03qhNV_JporxYYaOZCaZ203sAGxcEbSUk_Vr5YHp9yplbNRB9CAbXfehPdVGs6GO0dCN6EcQxQf7YlUWw6W&square_px=50',
        }}
      />
      <H2 style={{ marginLeft: metrics.base * 2 }} fontWeight="medium">
        Gustavo Carvalho
      </H2>
    </Container>
  );
};

export default UserCard;
