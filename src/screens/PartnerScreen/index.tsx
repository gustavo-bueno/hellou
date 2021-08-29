import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View } from 'react-native';
import UserBackground from '../../../assets/user-background.svg';
import { RootStackParamList } from '../../@types/routes';
import Button from '../../components/Button';

import { Container } from '../../components/Container';
import { H1, H2, H3 } from '../../components/Text';
import { interestTitleListMap } from '../../functions/interestsList';
import { IUser } from '../../models/user.model';
import { metrics } from '../../styles';
import { UserPhoto } from './styles';

type partnerScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Partner'
>;

const interests = [
  {
    title: 'Esportes',
  },
  {
    title: 'Séries e TV',
  },
];

const PartnerScreen: React.FC = () => {
  const { user } = useRoute()?.params as { user: IUser };
  const { navigate } = useNavigation<partnerScreenProps>();

  return (
    <View style={{ flex: 1 }}>
      <UserBackground style={{ left: -metrics.wp(5) }} />
      <UserPhoto
        source={{
          uri: user.photo,
        }}
        size="large"
      />
      <H2 fontWeight="medium" style={{ textAlign: 'center' }}>
        {user.name}
      </H2>
      <Container style={{ flex: 1 }}>
        <H2 fontWeight="medium">Descrição</H2>
        <H3 color="grey">{user.description}</H3>

        <H2 fontWeight="medium">Nível de inglês</H2>
        <H1 color="black" fontWeight="bold">
          {user.englishLevel}
        </H1>
        <H2 fontWeight="medium">Interesses</H2>
        <H3 color="grey">{interestTitleListMap(interests)}</H3>
        <Button
          style={{ marginTop: metrics.base * 2 }}
          onPress={() => navigate('ChatDetail', { user })}
          title="Chamar no chat"
        />
      </Container>
    </View>
  );
};

export default PartnerScreen;
