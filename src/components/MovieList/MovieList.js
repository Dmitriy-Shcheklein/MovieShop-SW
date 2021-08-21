import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieListItem from "../MovieListItem";
import { withMovieShopService } from '../Hoc';
import Spinner from '../Spinner';
import { moviesLoaded, moviesLoadedSuccess } from '../../actions/Actions';




class MovieList extends Component {

  componentDidMount() {
    this.updateMovies();
  }

  updateMovies() {
    const { movieShopService } = this.props;
    movieShopService.getAllMovies()
      .then((newMovies) => {
        this.props.moviesLoaded(newMovies)
      })
  }



  render() {

    const { movies, loading } = this.props;

    if (loading) {
      return <Spinner />
    }

    return (
      <ul>
        {
          movies.map((movie) => {
            return (
              <li key={movie.id}><MovieListItem
                movie={movie}
              /> </li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ movies, loading }) => {
  return {
    movies,
    loading
  }
}

const mapDispatchToProps = {
  moviesLoaded,
  moviesLoadedSuccess,
}

export default withMovieShopService()(connect(
  mapStateToProps, mapDispatchToProps)(MovieList)
);

