import React, { useState } from 'react';
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Container } from '../../components/Container';
import { H1, H2, H3 } from '../../components/Text';

import { InterestContainer, InterestsList, ReadyButton } from './styles';
import { metrics } from '../../styles';
import { Divider } from '../../components/Divider';
import { RootStackParamList } from '../../@types/routes';
import categories from '../../mocks/categories';
import { IInterest } from '../../models/interest.model';
import { interestTitleListMap } from '../../functions/interestsList';

type interestScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Interests'
>;

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
      <InterestContainer backgroundColor={categories[item.title].color}>
        {categories[item.title].icon}
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
        Isso, aí sim! Escolhe aqui, quais são seus interesses?
      </H1>
      <H3>
        Selecionados:{' '}
        {hasAtLeastAInterestSelected
          ? 'Nenhum.'
          : interestTitleListMap(interestTopics)}
      </H3>
      <InterestsList
        renderItem={renderItem}
        data={interests}
        ItemSeparatorComponent={() => <Divider />}
      />
      <ReadyButton
        onPress={() => navigate('Description')}
        disabled={hasAtLeastAInterestSelected}
      />
    </Container>
  );
};

export default InterestsScreen;
