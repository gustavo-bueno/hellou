import React from 'react';
import { metrics } from '../../styles';

import { H2 } from '../Text';
import { UserPhoto } from '../UserPhoto';

import { Container } from './styles';

const UserCard = () => {
  return (
    <Container>
      <UserPhoto
        source={{
          uri: 'https://www.facebook.com/profile/pic.php?cuid=AYjeZZgTfxNIrbTj03X3_w1Rvz9Kdq98mTVr01FTxWIm0L4teDGDWo4WH1zQDRKQJH30FBBL5NxU2-f3CYHwlnW-TY2jIBGcDEoMdBkVZ1LM_kBp7pbNnKKSPYoepP1bwrqRz03qhNV_JporxYYaOZCaZ203sAGxcEbSUk_Vr5YHp9yplbNRB9CAbXfehPdVGs6GO0dCN6EcQxQf7YlUWw6W&square_px=50',
        }}
      />
      <H2 style={{ marginLeft: metrics.base * 2 }} fontWeight="medium">
        Gustavo Carvalho
      </H2>
    </Container>
  );
};

export default UserCard;
