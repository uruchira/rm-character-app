import React from 'react';

import { NoPageWrapper } from '../styles/layout';

const NoMatchPage = () => {
  return (
    <NoPageWrapper>
      <p>
        <span>404</span>
        <i>Sorry, &nbsp;Page not found</i>
      </p>
    </NoPageWrapper>
  );
};

export default NoMatchPage;
