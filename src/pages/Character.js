import React from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import useAxios from '../hooks/useAxios';

import {
  CharacterInfo,
  CharacterInfoHeader,
  CharacterInfoIdSection,
  CharacterInfoStatus,
  CharacterInfoBody
} from '../styles';

const Character = () => {
  const { characterId } = useParams();
  const [loading, error, response] = useAxios(characterId);

  const renderSpeciesText = (species, gender) => {
    return `This Rick and Morty TV show character is a ${species.toLowerCase()} and it's gender is ${gender.toLowerCase()}.`;
  };

  const renderOriginText = (origin) => {
    return origin ? ` Its origin is ${origin.name}.` : '';
  };

  const renderLocationText = (location) => {
    return location
      ? ` The last known location of this character is ${location.name}.`
      : '';
  };

  const renderCharacterDetails = () => {
    if (response) {
      const { id, name, image, status, species, gender, origin, location } =
        response;
      return (
        <>
          <CharacterInfoHeader>{name}</CharacterInfoHeader>
          <img src={image} alt={name} />
          <CharacterInfoIdSection>
            <i>#{id}</i>
            <CharacterInfoStatus status={status.toLowerCase()}>
              {status.toLowerCase()}
            </CharacterInfoStatus>
          </CharacterInfoIdSection>
          <CharacterInfoBody>
            {renderSpeciesText(species, gender)}
            {renderOriginText(origin)}
            {renderLocationText(location)}
          </CharacterInfoBody>
        </>
      );
    } else {
      return '';
    }
  };

  function getErrorMessage(err) {
    if (err.response) {
      const { data } = err.response;
      return data ? data.error : err.message;
    }
    return err.message;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage text={getErrorMessage(error)} />
      ) : (
        <CharacterInfo>{renderCharacterDetails()}</CharacterInfo>
      )}
    </>
  );
};

export default Character;
