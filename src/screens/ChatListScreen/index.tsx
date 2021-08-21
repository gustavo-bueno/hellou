import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { RootStackParamList } from '../../@types/routes';

import { Container } from '../../components/Container';
import { Divider } from '../../components/Divider';
import { H1 } from '../../components/Text';
import UserCard from '../../components/UserCard';

type chatListScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'ChatList'
>;

const data = [
  { username: 'Gustavo', photo: '' },
  { username: 'Gustavo', photo: '' },
  { username: 'Gustavo', photo: '' },
];

const ChatListScreen = () => {
  const { navigate } = useNavigation<chatListScreenProps>();

  const renderItem = ({ item }: any) => (
    <Ripple onPress={() => navigate('ChatDetail')}>
      <UserCard />
    </Ripple>
  );

  return (
    <Container>
      <H1 style={{ fontSize: 24 }} fontWeight="bold">
        Conversas
      </H1>
      <FlatList
        ItemSeparatorComponent={() => <Divider />}
        data={data}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default ChatListScreen;
