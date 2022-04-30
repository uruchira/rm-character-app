import React from 'react';

import { CenterWrapper } from '../styles';
import loadingIcon from '../assets/loading.gif';

function Loading() {
  return (
    <CenterWrapper>
      <img src={loadingIcon} alt="Loading..." width="48px" />
    </CenterWrapper>
  );
}

export default Loading;
