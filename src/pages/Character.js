import React from 'react';
import { useParams } from 'react-router-dom';

import useAxios from '../hooks/useAxios';

const Character = () => {
  const { id } = useParams();

  const [loading, error, response] = useAxios(id);

  const renderCharacterDetails = () => {
    if (response) {
      const { name, image, status, species, gender, origin, location } =
        response;
      return (
        <>
          <h3>{name}</h3>
          <div>
            <img src={image} alt={name} />
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <p>{origin.name}</p>
            <p>{location.name}</p>
          </div>
        </>
      );
    } else {
      return '';
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        error.message
      ) : (
        <div>{renderCharacterDetails()}</div>
      )}
    </div>
  );
};

export default Character;
