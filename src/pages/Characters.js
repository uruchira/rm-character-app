import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import Loading from '../components/Loading';
import useAxios from '../hooks/useAxios';

import { CharacterGrid } from '../styles/layout';

const Characters = () => {
  const [loading, error, response] = useAxios();

  const renderCharacterList = () => {
    if (response) {
      return response.results.map(
        ({ id, image, name, status, species, origin, location }) => (
          <Link key={id} to={`/${id}`}>
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
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        error.message
      ) : (
        <CharacterGrid>{renderCharacterList()}</CharacterGrid>
      )}
    </>
  );
};

export default Characters;
