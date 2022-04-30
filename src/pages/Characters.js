import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import useAxios from '../hooks/useAxios';

import { getErrorMessage } from '../util';

import { CharacterGrid } from '../styles';

const Characters = () => {
  const [loading, error, response] = useAxios();

  const renderCharacterList = () => {
    if (response) {
      return response.results.map(
        ({ id, image, name, status, species, origin, location }) => (
          <Link key={id} to={`/characters/${id}`}>
            <Card
              image={image}
              name={name}
              status={status}
              species={species}
              origin={origin.name}
              location={location?.name}
            />
          </Link>
        )
      );
    } else {
      return '';
    }
  };

  return (
    <div data-testid="character-list">
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage text={getErrorMessage(error)} />
      ) : (
        <CharacterGrid>{renderCharacterList()}</CharacterGrid>
      )}
    </div>
  );
};

export default Characters;
