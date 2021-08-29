import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../../@types/routes';

import { Container } from '../../components/Container';
import UserCardList from '../../components/UserCardList';

const users = [
  {
    id: '1',
    name: 'Gustavo',
    photo:
      'https://www.facebook.com/profile/pic.php?cuid=AYgMNipnTP0tfJMX7wcfViOXzwtuT-FrddHOcFPWcPjS7H-Ro26Sw-N4E3FrbZm01dnYhL5G-f2RJGSdWio9vux8TqXUaX9iRK7ODuzruxv2gKn0LnioOZQNGkRKY4skkuSKzc4f3osvNVwIaes1ZbLM-Zj8WaeykDCGg4cDLuEg0WudGOKL1WyS6DHH5uONve6Yuiw8wXJfywc6oIxtjEfBteoMhw58o1Y3Z30Sgp9UPqWxzRzHzSn1jByzkRv14jU&square_px=64',
    description: 'Boa tarde',
    englishLevel: 'C1',
    interests: [{ title: 'Esportes' }],
  },
  {
    id: '2',
    name: 'Gustavo',
    photo:
      'https://www.facebook.com/profile/pic.php?cuid=AYgMNipnTP0tfJMX7wcfViOXzwtuT-FrddHOcFPWcPjS7H-Ro26Sw-N4E3FrbZm01dnYhL5G-f2RJGSdWio9vux8TqXUaX9iRK7ODuzruxv2gKn0LnioOZQNGkRKY4skkuSKzc4f3osvNVwIaes1ZbLM-Zj8WaeykDCGg4cDLuEg0WudGOKL1WyS6DHH5uONve6Yuiw8wXJfywc6oIxtjEfBteoMhw58o1Y3Z30Sgp9UPqWxzRzHzSn1jByzkRv14jU&square_px=64',
    description: 'Boa tarde',
    englishLevel: 'C1',
    interests: [{ title: 'Esportes' }],
  },
  {
    id: '3',
    name: 'Gustavo',
    photo:
      'https://www.facebook.com/profile/pic.php?cuid=AYgMNipnTP0tfJMX7wcfViOXzwtuT-FrddHOcFPWcPjS7H-Ro26Sw-N4E3FrbZm01dnYhL5G-f2RJGSdWio9vux8TqXUaX9iRK7ODuzruxv2gKn0LnioOZQNGkRKY4skkuSKzc4f3osvNVwIaes1ZbLM-Zj8WaeykDCGg4cDLuEg0WudGOKL1WyS6DHH5uONve6Yuiw8wXJfywc6oIxtjEfBteoMhw58o1Y3Z30Sgp9UPqWxzRzHzSn1jByzkRv14jU&square_px=64',
    description: 'Boa tarde',
    englishLevel: 'C1',
    interests: [{ title: 'Esportes' }],
  },
];

type partnerListProps = NativeStackNavigationProp<
  RootStackParamList,
  'PartnerList'
>;

const PartnerListScreen: React.FC = () => {
  const { navigate } = useNavigation<partnerListProps>();

  return (
    <Container>
      <UserCardList
        data={users}
        onPressUserCard={(user) => navigate('Partner', { user })}
      />
    </Container>
  );
};

export default PartnerListScreen;
