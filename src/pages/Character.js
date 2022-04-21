import React from 'react';
import { useParams } from 'react-router-dom';

import useAxios from '../hooks/useAxios';

const Character = () => {
  const { id } = useParams();

  const [loading, error, response] = useAxios(id);

  const renderCharacterDetails = () => {
    if (response) {
      const { name, status, species } = response;
      return (
        <>
          <h3>{name}</h3>
          <div>
            <p>{status}</p>
            <p>{species}</p>
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
