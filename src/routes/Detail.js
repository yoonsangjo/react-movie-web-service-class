import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Movie from '../components/Movie';

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate('/');
    }
  });

  if (location.state) {
    const { id, rank, movieNm, openDt } = location.state;
    return <Movie id={id} rank={rank} movieNm={movieNm} openDt={openDt} />;
  } else {
    return null;
  }
}

export default Detail;
