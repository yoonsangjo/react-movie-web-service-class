import React from 'react';
import PropTypes from 'prop-types';

const Food = ({ name, poster, rating }) => {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <div
        style={{
          width: '400px',
          height: '400px',
          border: '1px solid gray',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          src={poster}
          alt={name}
        />
      </div>
    </div>
  );
};

Food.propTypes = {
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Food;
