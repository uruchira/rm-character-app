import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper, HeaderContainer } from '../styles';
import logoImage from '../assets/logo.jpg';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link to="/characters">
          <h1 data-testid="appNameOne">Rick</h1>
          <img src={logoImage} alt="logo" height="100" />
          <h1 data-testid="appNameTwo">Morty</h1>
        </Link>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
