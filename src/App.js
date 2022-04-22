import React from 'react';
import { Global } from '@emotion/react';

import AppRoutes from './components/AppRoutes';
import Header from './components/Header';

import globalStyles from './styles/globalStyles';
import { MainWrapper, MainContainer } from './styles/layout';

const App = () => {
  return (
    <>
      <Header />
      <Global styles={globalStyles} />
      <MainWrapper>
        <MainContainer>
          <AppRoutes />
        </MainContainer>
      </MainWrapper>
    </>
  );
};

export default App;
