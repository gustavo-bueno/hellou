import React from 'react';
import { FlatList } from 'react-native';

import { Container } from '../../components/Container';
import { Divider } from '../../components/Divider';
import { H1 } from '../../components/Text';
import UserCard from '../../components/UserCard';

const renderItem = ({ item }: any) => <UserCard />;

const data = [
  { username: 'Gustavo', photo: '' },
  { username: 'Gustavo', photo: '' },
  { username: 'Gustavo', photo: '' },
];

const ChatListScreen = () => {
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
