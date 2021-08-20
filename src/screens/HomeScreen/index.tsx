import React from 'react';
import { FlatList, ScrollView } from 'react-native';

import { Container } from '../../components/Container';
import { Divider } from '../../components/Divider';
import { H1, H2 } from '../../components/Text';
import UserCard from '../../components/UserCard';

import { colors, metrics } from '../../styles';
import { BannerContainer, BannerImage } from './styles';

const banners = [
  {
    title: 'Encontre parceiros de acordo com seus interesses.',
    imageSrc: require('../../../assets/images/woman-cellphone.png'),
    color: colors.purple,
  },
  {
    title:
      'Os parceiros são do mesmo nível que você, não precisa se preocupar!',
    imageSrc: require('../../../assets/images/man-cellphone.png'),
    color: '#3F65C7',
  },
];

const renderItem = ({ item }: any) => {
  return (
    <BannerContainer color={item.color}>
      <BannerImage source={item.imageSrc} />
      <H2 style={{ textAlign: 'right' }} fontWeight="medium" color="white">
        {item.title}
      </H2>
    </BannerContainer>
  );
};

const renderUser = ({ item }: any) => <UserCard />;
const users = ['', '', ''];

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <Container>
        <H1 fontWeight="medium">Olá, Gustavo!</H1>
        <FlatList
          horizontal
          style={{ marginVertical: metrics.base * 3 }}
          renderItem={renderItem}
          data={banners}
          keyExtractor={(_, idx) => idx.toString()}
        />
        <H1 style={{ marginBottom: metrics.base * 3 }} fontWeight="bold">
          Parceiros com o mesmo nível que você :)
        </H1>
        <FlatList
          data={users}
          renderItem={renderUser}
          ItemSeparatorComponent={() => <Divider />}
        />
        <H1 style={{ marginVertical: metrics.base * 3 }} fontWeight="bold">
          Parceiros com o mesmos interesses que você
        </H1>
        <FlatList
          data={users}
          renderItem={renderUser}
          ItemSeparatorComponent={() => <Divider />}
        />
      </Container>
    </ScrollView>
  );
};

export default HomeScreen;
