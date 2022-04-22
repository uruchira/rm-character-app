import React from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../components/Loading';
import useAxios from '../hooks/useAxios';

import { CharacterInfo } from '../styles/layout';

const Character = () => {
  const { id } = useParams();
  const [loading, error, response] = useAxios(id);

  const renderCharacterDetails = () => {
    if (response) {
      const { name, image, status, species, gender, origin, location } =
        response;
      return (
        <>
          <h1>{name}</h1>
          <img src={image} alt={name} />
          <p>{status}</p>
          <p>{species}</p>
          <p>{gender}</p>
          <p>{origin.name}</p>
          <p>{location.name}</p>
        </>
      );
    } else {
      return '';
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        error.message
      ) : (
        <CharacterInfo>{renderCharacterDetails()}</CharacterInfo>
      )}
    </>
  );
};

export default Character;
