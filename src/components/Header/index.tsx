import React from 'react';
import Hellou from '../../../assets/hellou.svg';

import { Container, UserPhoto } from './styles';

const Header = ({ showUserPhoto = false }: { showUserPhoto?: boolean }) => {
  return (
    <Container>
      <Hellou />
      {showUserPhoto && (
        <UserPhoto
          source={{
            uri: 'https://www.facebook.com/profile/pic.php?cuid=AYjeZZgTfxNIrbTj03X3_w1Rvz9Kdq98mTVr01FTxWIm0L4teDGDWo4WH1zQDRKQJH30FBBL5NxU2-f3CYHwlnW-TY2jIBGcDEoMdBkVZ1LM_kBp7pbNnKKSPYoepP1bwrqRz03qhNV_JporxYYaOZCaZ203sAGxcEbSUk_Vr5YHp9yplbNRB9CAbXfehPdVGs6GO0dCN6EcQxQf7YlUWw6W&square_px=50',
          }}
        />
      )}
    </Container>
  );
};

export default Header;
