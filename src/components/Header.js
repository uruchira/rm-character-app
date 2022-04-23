import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper, HeaderContainer } from '../styles';
import logoImage from '../assets/logo.jpg';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link to="/characters">
          <img src={logoImage} alt="logo" height="100" />
        </Link>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
