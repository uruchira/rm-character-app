import React from 'react';
import PropTypes from 'prop-types';

import { CenteringSection, ErrorWrapper } from '../styles/layout';
import errorImage from '../assets/error-image.png';

function ErrorMessage({ text }) {
  return (
    <CenteringSection>
      <ErrorWrapper>
        <img src={errorImage} alt="Error Image" width="140px" />
        <p>{text}</p>
      </ErrorWrapper>
    </CenteringSection>
  );
}

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired
};

export default ErrorMessage;
