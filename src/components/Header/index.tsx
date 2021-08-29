import React from 'react';
import Hellou from '../../../assets/hellou.svg';
import { UserPhoto } from '../UserPhoto';

import { Container } from './styles';

const Header = ({ showUserPhoto = false }: { showUserPhoto?: boolean }) => {
  return (
    <Container>
      <Hellou />
      {showUserPhoto && (
        <UserPhoto
          source={{
            uri: 'https://www.facebook.com/profile/pic.php?cuid=AYgMNipnTP0tfJMX7wcfViOXzwtuT-FrddHOcFPWcPjS7H-Ro26Sw-N4E3FrbZm01dnYhL5G-f2RJGSdWio9vux8TqXUaX9iRK7ODuzruxv2gKn0LnioOZQNGkRKY4skkuSKzc4f3osvNVwIaes1ZbLM-Zj8WaeykDCGg4cDLuEg0WudGOKL1WyS6DHH5uONve6Yuiw8wXJfywc6oIxtjEfBteoMhw58o1Y3Z30Sgp9UPqWxzRzHzSn1jByzkRv14jU&square_px=64',
          }}
        />
      )}
    </Container>
  );
};

export default Header;
