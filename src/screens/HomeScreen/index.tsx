import React from 'react';
import { FlatList, ImageSourcePropType, ScrollView } from 'react-native';
import Ripple from 'react-native-material-ripple';

import { Container } from '../../components/Container';
import { Divider } from '../../components/Divider';
import { H1, H2, H3 } from '../../components/Text';
import UserCard from '../../components/UserCard';
import categories from '../../mocks/categories';
import { IInterest } from '../../models/interest.model';
import { IUser } from '../../models/user.model';

import { colors, metrics } from '../../styles';
import {
  BannerContainer,
  BannerImage,
  InterestButton,
  InterestButtonContainer,
} from './styles';

interface IBanner {
  title: string;
  imageSrc: ImageSourcePropType;
  color: string;
}

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

const users = [
  {
    id: '1',
    name: 'Gustavo',
    photo: '',
    description: 'Boa tarde',
    englishLevel: 'C1',
    interests: [{ title: 'Esportes' }],
  },
  {
    id: '2',
    name: 'Gustavo',
    photo: '',
    description: 'Boa tarde',
    englishLevel: 'C1',
    interests: [{ title: 'Esportes' }],
  },
  {
    id: '3',
    name: 'Gustavo',
    photo: '',
    description: 'Boa tarde',
    englishLevel: 'C1',
    interests: [{ title: 'Esportes' }],
  },
];

const interests = [
  {
    title: 'Esportes',
  },
  {
    title: 'Tecnologia',
  },
  {
    title: 'Moda',
  },
  {
    title: 'Séries e TV',
  },
  {
    title: 'Educação',
  },
  {
    title: 'Dinheiro',
  },
];

const renderItem = ({ item }: { item: IBanner }) => {
  return (
    <BannerContainer color={item.color}>
      <BannerImage source={item.imageSrc} />
      <H2 style={{ textAlign: 'right' }} fontWeight="medium" color="white">
        {item.title}
      </H2>
    </BannerContainer>
  );
};

const renderUser = ({ item }: { item: IUser }) => <UserCard />;

const renderCategory = ({ item }: { item: IInterest }) => (
  <InterestButtonContainer>
    <InterestButton color={categories[item.title].color}>
      {categories[item.title].icon}
    </InterestButton>
    <H3 color="grey" style={{ textAlign: 'center' }}>
      {item.title}
    </H3>
  </InterestButtonContainer>
);

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <Container>
        <H1 fontWeight="medium">Olá, Gustavo!</H1>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ marginVertical: metrics.base * 3 }}
          renderItem={renderItem}
          data={banners}
          keyExtractor={(_, idx) => idx.toString()}
        />
        <H1
          style={{ marginBottom: metrics.base * 3, fontSize: 18 }}
          fontWeight="bold"
        >
          Filtrar parceiros por interesses
        </H1>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={interests}
          renderItem={renderCategory}
          keyExtractor={(_, idx) => idx.toString()}
        />
        <H1
          style={{ marginVertical: metrics.base * 3, fontSize: 18 }}
          fontWeight="bold"
        >
          Parceiros com o mesmos interesses que você
        </H1>
        <FlatList
          data={users}
          renderItem={renderUser}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <Divider />}
          ListFooterComponent={() => (
            <Ripple style={{ paddingVertical: metrics.base }}>
              <H3 style={{ textAlign: 'center' }} fontWeight="medium">
                ver mais +
              </H3>
            </Ripple>
          )}
        />
      </Container>
    </ScrollView>
  );
};

export default HomeScreen;
