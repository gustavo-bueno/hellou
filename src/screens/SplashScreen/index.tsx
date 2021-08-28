import React from 'react';

import Hellou from '../../../assets/hellou.svg';
import { Container } from './styles';

const SplashScreen: React.FC = () => {
  return (
    <Container>
      <Hellou />
    </Container>
  );
};

export default SplashScreen;
