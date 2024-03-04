import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ rank, movieNm, openDt }) {
  return (
    <div className="movie">
      <div className="movie__info">
        [RANK{rank}] {movieNm}
      </div>
      <div className="movie__openDt">{openDt}</div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  movieNm: PropTypes.string.isRequired,
  openDt: PropTypes.string.isRequired,
};

export default Movie;
