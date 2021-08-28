import React, { useState, useContext } from 'react';

import { UserContext } from '../../contexts/userContext';
import Button from '../../components/Button';
import { Container } from '../../components/Container';
import { H1 } from '../../components/Text';

import { Input } from './styles';
import { metrics } from '../../styles';

const DescriptionScreen: React.FC = () => {
  const [description, setDescription] = useState('');
  const { setUser } = useContext(UserContext);

  const onSubmit = () => {
    setUser({} as any);
  };

  return (
    <Container>
      <H1>
        Opa, estamos quase lá! Agora só falta adicionar uma descrição para o seu
        perfil!
      </H1>
      <Input
        placeholder="Fala um pouco sobre você! :)"
        style={{ marginVertical: metrics.base * 3 }}
        multiline
        onChangeText={(text) => setDescription(text)}
      />
      <Button onPress={onSubmit} title="Terminei!" />
    </Container>
  );
};

export default DescriptionScreen;
