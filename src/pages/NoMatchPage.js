import React from 'react';

import { CenteringSection } from '../styles';

const NoMatchPage = () => {
  return (
    <CenteringSection>
      <section>
        <span>404</span>
        <p>Sorry, &nbsp;Page not found</p>
        <i>The page you requested could not be found</i>
      </section>
    </CenteringSection>
  );
};

export default NoMatchPage;
