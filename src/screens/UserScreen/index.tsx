import React, { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import Ripple from 'react-native-material-ripple';

import { EvilIcons, AntDesign } from '@expo/vector-icons';

import UserBackground from '../../../assets/user-background.svg';

import { Container } from '../../components/Container';
import { H1, H2, H3 } from '../../components/Text';
import { interestTitleListMap } from '../../functions/interestsList';
import { colors, metrics } from '../../styles';
import { DescriptionInput, SpaceBetweenContainer, UserPhoto } from './styles';

const interests = [
  {
    title: 'Esportes',
  },
  {
    title: 'Séries e TV',
  },
];

const UserScreen: React.FC = () => {
  const [editable, setEditable] = useState(false);
  const [description, setDescription] = useState(
    'Yo soy gustavo, soy espa^nol!! yo gostaria de praticar mi ingles! gracias!!s'
  );
  const [currentDescription, setCurrentDescription] = useState('');

  useEffect(() => {
    setCurrentDescription(description);
  }, [description]);

  return (
    <View style={{ flex: 1 }}>
      <UserBackground style={{ left: -metrics.wp(5) }} />
      <UserPhoto
        source={{
          uri: 'https://www.facebook.com/profile/pic.php?cuid=AYjeZZgTfxNIrbTj03X3_w1Rvz9Kdq98mTVr01FTxWIm0L4teDGDWo4WH1zQDRKQJH30FBBL5NxU2-f3CYHwlnW-TY2jIBGcDEoMdBkVZ1LM_kBp7pbNnKKSPYoepP1bwrqRz03qhNV_JporxYYaOZCaZ203sAGxcEbSUk_Vr5YHp9yplbNRB9CAbXfehPdVGs6GO0dCN6EcQxQf7YlUWw6W&square_px=50',
        }}
        size="large"
      />
      <H2 fontWeight="medium" style={{ textAlign: 'center' }}>
        Gustavo Carvalho
      </H2>
      <Container style={{ flex: 1 }}>
        <SpaceBetweenContainer>
          <H2 fontWeight="medium">Descrição</H2>
          {!editable ? (
            <Ripple onPress={() => setEditable(true)}>
              <EvilIcons name="pencil" size={30} color={colors.grey} />
            </Ripple>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <Ripple
                onPress={() => {
                  setEditable(false);
                  setCurrentDescription(description);
                }}
              >
                <AntDesign name="closecircleo" size={24} color="red" />
              </Ripple>
              <Ripple
                onPress={() => {
                  setEditable(false);
                  setDescription(currentDescription);
                }}
                style={{ marginLeft: metrics.base }}
              >
                <AntDesign name="checkcircleo" size={24} color="green" />
              </Ripple>
            </View>
          )}
        </SpaceBetweenContainer>
        <DescriptionInput
          scrollEnabled={false}
          editable={editable}
          value={currentDescription ?? 'Nenhuma descrição por aqui. 🔎'}
          onChangeText={(text) => setCurrentDescription(text)}
        />
        <H2 fontWeight="medium">Nível de inglês</H2>
        <H1 color="black" fontWeight="bold">
          C1
        </H1>
        <H2 fontWeight="medium">Interesses</H2>
        <H3 color="grey">{interestTitleListMap(interests)}</H3>
      </Container>
    </View>
  );
};

export default UserScreen;
