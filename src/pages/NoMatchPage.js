import React from 'react';

import { CenterWrapper } from '../styles';

const NoMatchPage = () => {
  return (
    <CenterWrapper>
      <section>
        <span>404</span>
        <p>Sorry, &nbsp;Page not found</p>
        <i>The page you requested could not be found</i>
      </section>
    </CenterWrapper>
  );
};

export default NoMatchPage;
