import React from 'react';

import { CenteringSection } from '../styles';
import loadingIcon from '../assets/loading.gif';

function Loading() {
  return (
    <CenteringSection>
      <img src={loadingIcon} alt="Loading Icon" width="48px" />
    </CenteringSection>
  );
}

export default Loading;
