import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ id, rank, movieNm, openDt }) {
  return (
    <div className="movie">
      <div className="movie__info">
        <Link
          to={`/movie/${id}`}
          state={{
            id,
            rank,
            movieNm,
            openDt,
          }}
        >
          [RANK{rank}] {movieNm}
        </Link>
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
