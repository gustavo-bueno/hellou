import React, { useEffect, useState } from 'react';
import { FlatList, Linking } from 'react-native';
import Ripple from 'react-native-material-ripple';

import { RootStackParamList } from '../../@types/routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Container } from '../../components/Container';
import { H1, H2, H3 } from '../../components/Text';
import Button from '../../components/Button';

import { metrics } from '../../styles';
import {
  DotButton,
  DotContainer,
  ProgressBar,
  ProgressContainer,
  TextLevel,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type englishLevelScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'EnglishLevel'
>;

const englishLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const DOT_SPACING = 20.1;

const EnglishLevelScreen: React.FC = () => {
  const [englishLevel, setEnglishLevel] = useState({
    level: 'A1',
    index: 0,
    progressWidth: 0,
  });
  const { navigate } = useNavigation<englishLevelScreenProp>();
  const englishLevelWidth = useSharedValue(0);

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

  useEffect(() => {
    englishLevelWidth.value = withTiming(`${englishLevel.progressWidth}%`, {
      duration: 300,
    });
  }, [englishLevel.progressWidth]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: englishLevelWidth.value,
    };
  });

  return (
    <Container>
      <H1 fontWeight="medium">
        Olá, Gustavo Carvalho! Seja bem vindo (a) ao hellou!
      </H1>
      <H2 color="grey">Para começarmos, qual o seu nível?</H2>
      <TextLevel>{englishLevel.level}</TextLevel>
      <ProgressContainer>
        <ProgressBar style={animatedStyles} />
      </ProgressContainer>
      <FlatList
        horizontal
        style={{ width: '101.5%' }}
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
        onPress={() => navigate('Interests')}
        style={{ marginVertical: metrics.base * 3 }}
        title="Selecionar nível"
      />
      <Ripple
        onPress={() =>
          Linking.openURL(
            'https://www.cambridgeenglish.org/br/test-your-english/'
          )
        }
      >
        <H3 color="purple" style={{ textDecorationLine: 'underline' }}>
          Está com dúvida sobre seu nivelamento?
        </H3>
      </Ripple>
    </Container>
  );
};

export default EnglishLevelScreen;
