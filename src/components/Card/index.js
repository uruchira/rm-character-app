import React from 'react';
import PropTypes from 'prop-types';

import {
  CardWrapper,
  CardImage,
  CardInfo,
  CardStatusInfo,
  CardStatusIndicator,
  CardMiniInfo
} from './cardStyles';

const Card = ({ image, name, status, species, origin, location }) => {
  return (
    <CardWrapper>
      <CardImage src={image} width="200" />
      <CardInfo>
        <h1>{name}</h1>
        <CardStatusInfo>
          <CardStatusIndicator status={status.toLowerCase()} />
          {`${status} - ${species}`}
        </CardStatusInfo>
        <CardMiniInfo>
          <span>Origin:</span>
          <p>{origin}</p>
        </CardMiniInfo>
        <CardMiniInfo>
          <span>Last known location:</span>
          <p>{location}</p>
        </CardMiniInfo>
      </CardInfo>
    </CardWrapper>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default Card;
