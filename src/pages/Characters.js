import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';

import useAxios from '../hooks/useAxios';

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
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        error.message
      ) : (
        <div>{renderCharacterList()}</div>
      )}
    </div>
  );
};

export default Characters;
