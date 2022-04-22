import React from 'react';

import { HeaderWrapper, HeaderContainer } from '../styles/layout';
import logoImage from '../assets/logo.jpg';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <img src={logoImage} alt="logo" />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
