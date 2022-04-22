import React from 'react';

import { LoadingWrapper } from '../styles/layout';
import loadingIcon from '../assets/loading.gif';

function Loading() {
  return (
    <LoadingWrapper>
      <img src={loadingIcon} alt="Loading Icon" width="48px" />
    </LoadingWrapper>
  );
}

export default Loading;
