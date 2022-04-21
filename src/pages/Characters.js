import React from 'react';
import { Link } from 'react-router-dom';

import useAxios from '../hooks/useAxios';

const Characters = () => {
  const [loading, error, response] = useAxios();

  const renderCharacterList = () => {
    if (response) {
      return response.results.map(({ id, name }) => (
        <Link key={id} to={`/${id}`}>
          {name}
        </Link>
      ));
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
