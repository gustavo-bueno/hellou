import React from 'react';
import Ripple from 'react-native-material-ripple';

import { Ionicons } from '@expo/vector-icons';

import { UserCardProps } from './interfaces';
import { H2 } from '../Text';
import { UserPhoto } from '../UserPhoto';
import { Container } from './styles';
import { colors, metrics } from '../../styles';
import { useNavigation } from '@react-navigation/native';

const UserCard = ({ backButton = false, name, photo }: UserCardProps) => {
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
          uri: photo,
        }}
      />
      <H2 style={{ marginLeft: metrics.base * 2 }} fontWeight="medium">
        {name}
      </H2>
    </Container>
  );
};

export default UserCard;
