import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper, HeaderContainer } from '../styles/layout';
import logoImage from '../assets/logo.jpg';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link to="/">
          <img src={logoImage} alt="logo" />
        </Link>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
