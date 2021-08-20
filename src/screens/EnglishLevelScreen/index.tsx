import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import Header from '../../components/Header';
import { Container } from '../../components/Container';
import { H1, H2, H3 } from '../../components/Text';
import { metrics } from '../../styles';

import {
  DotButton,
  DotContainer,
  ProgressBar,
  ProgressContainer,
  TextLevel,
} from './styles';
import Button from '../../components/Button';

const englishLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const DOT_SPACING = 20;

const EnglishLevelScreen: React.FC = () => {
  const [englishLevel, setEnglishLevel] = useState({
    level: 'A1',
    index: 0,
    progressWidth: DOT_SPACING,
  });

  const renderItem = ({ item, index }: { item: string; index: number }) => {
    const progressWidth = DOT_SPACING * index;

    return (
      <DotContainer>
        <DotButton
          achieved={index <= englishLevel.index}
          onPress={() =>
            setEnglishLevel({
              level: item,
              index,
              progressWidth,
            })
          }
        />
        <H3 fontWeight="bold">{item}</H3>
      </DotContainer>
    );
  };

  return (
    <View>
      <Header />
      <Container>
        <H1 fontWeight="medium">
          Olá, Gustavo Carvalho! Seja bem vindo (a) ao hellou!
        </H1>
        <H2 color="grey">Para começarmos, qual o seu nível?</H2>
        <TextLevel>{englishLevel.level}</TextLevel>
        <ProgressContainer>
          <ProgressBar progress={englishLevel.progressWidth} />
        </ProgressContainer>
        <FlatList
          horizontal
          style={{ width: '100%' }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'space-between',
          }}
          renderItem={renderItem}
          data={englishLevels}
          keyExtractor={(_, idx) => idx.toString()}
        />
        <H3 color="grey">A - iniciante</H3>
        <H3 color="grey">B - intermediário</H3>
        <H3 color="grey">C - avançado</H3>
        <Button
          style={{ marginTop: metrics.base * 3 }}
          title="Selecionar nível"
        />
      </Container>
    </View>
  );
};

export default EnglishLevelScreen;
