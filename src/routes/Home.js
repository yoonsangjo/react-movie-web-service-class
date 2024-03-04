import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends Component {
  state = {
    isLoading: true,
    dailyBoxOfficeList: [],
  };
  getMovies = async () => {
    const {
      data: {
        boxOfficeResult: { dailyBoxOfficeList },
      },
    } = await axios.get(
      'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230101'
    );
    this.setState({ dailyBoxOfficeList, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, dailyBoxOfficeList } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {dailyBoxOfficeList.map((movie) => (
              <Movie
                key={movie.rnum}
                id={movie.rnum}
                rank={movie.rank}
                movieNm={movie.movieNm}
                openDt={movie.openDt}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
