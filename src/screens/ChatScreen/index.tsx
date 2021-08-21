import React from 'react';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';

import { Feather } from '@expo/vector-icons';

import {
  Container,
  Content,
  Input,
  InputContainer,
  SendButton,
  UserMessage,
} from './styles';
import { colors } from '../../styles';
import { H2 } from '../../components/Text';
import UserCard from '../../components/UserCard';

const user = {
  id: 1,
};

const messages = [
  {
    content: 'Hi, how are you?',
    user: {
      id: 2,
    },
  },
  {
    content: "Hi, i'm good, and you?",
    user: {
      id: 1,
    },
  },
  {
    content: "That's good! I'm great as well, where r u from?",
    user: {
      id: 2,
    },
  },
];

const renderMessage = ({ item }: any) => (
  <UserMessage isReceived={item.user.id !== user.id}>
    <H2 color="white">{item.content}</H2>
  </UserMessage>
);

const ChatScreen: React.FC = () => {
  return (
    <Container>
      <UserCard backButton />
      <Content>
        <FlatList
          contentContainerStyle={{ flex: 1, width: '100%' }}
          data={messages}
          renderItem={renderMessage}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <InputContainer>
            <Input />
            <SendButton>
              <Feather name="send" size={24} color={colors.white} />
            </SendButton>
          </InputContainer>
        </KeyboardAvoidingView>
      </Content>
    </Container>
  );
};

export default ChatScreen;
