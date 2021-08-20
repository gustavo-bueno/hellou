import React, { useState } from 'react';
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';

import { Container } from '../../components/Container';
import { H1, H2, H3 } from '../../components/Text';

import { InterestContainer, InterestsList, ReadyButton } from './styles';
import { metrics } from '../../styles';
import { Divider } from '../../components/Divider';
import { RootStackParamList } from '../../@types/routes';

export interface IInterest {
  title: string;
  color: string;
  icon: JSX.Element;
}

type interestScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Interests'
>;

const interests = [
  {
    title: 'Esportes',
    color: 'aquamarine',
    icon: <FontAwesome5 name="basketball-ball" size={35} color="white" />,
  },
  {
    title: 'Tecnologia',
    color: 'cadetblue',
    icon: <MaterialIcons name="computer" size={35} color="white" />,
  },
  {
    title: 'Moda',
    color: 'hotpink',
    icon: <MaterialCommunityIcons name="purse" size={35} color="white" />,
  },
  {
    title: 'Séries e TV',
    color: 'crimson',
    icon: <MaterialIcons name="tv" size={35} color="white" />,
  },
  {
    title: 'Educação',
    color: 'mediumspringgreen',
    icon: <FontAwesome5 name="book" size={35} color="white" />,
  },
  {
    title: 'Dinheiro',
    color: 'gold',
    icon: <MaterialIcons name="attach-money" size={35} color="white" />,
  },
];

const InterestsScreen: React.FC = () => {
  const [interestTopics, setInterestTopics] = useState<IInterest[]>([]);
  const { navigate } = useNavigation<interestScreenProps>();

  const addInterest = (interest: IInterest) => {
    const currentInterests = [...interestTopics];

    const interestAlreadySelected = currentInterests.find(
      (interestTopic) => interestTopic.title === interest.title
    );

    if (interestAlreadySelected) {
      const filteredInterests = currentInterests.filter(
        (interestTopic) => interestTopic.title !== interest.title
      );
      setInterestTopics(filteredInterests);
      return;
    }

    setInterestTopics([...currentInterests, interest]);
  };

  const renderItem = ({ item }: { item: IInterest }) => (
    <Ripple
      onPress={() => addInterest(item)}
      rippleContainerBorderRadius={metrics.borderRadius}
    >
      <InterestContainer backgroundColor={item.color}>
        {item.icon}
        <H2 color="white" fontWeight="medium">
          {item.title}
        </H2>
      </InterestContainer>
    </Ripple>
  );

  const hasAtLeastAInterestSelected = interestTopics.length === 0;

  return (
    <Container style={{ position: 'relative', flex: 1 }}>
      <H1 fontWeight="medium">
        Opa, estamos quase lá! Escolhe aqui, quais são seus interesses?
      </H1>
      <H3>
        Selecionados:{' '}
        {interestTopics.map((interest, idx) => {
          if (interestTopics[idx + 1]) {
            return `${interest.title}, `;
          }
          return `${interest.title}.`;
        })}
      </H3>
      <InterestsList
        renderItem={renderItem}
        data={interests}
        ItemSeparatorComponent={() => <Divider />}
      />
      <ReadyButton
        onPress={() => navigate('Home')}
        disabled={hasAtLeastAInterestSelected}
      />
    </Container>
  );
};

export default InterestsScreen;
