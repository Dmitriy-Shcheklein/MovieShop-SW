import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListItem from "../MovieListItem";
import { withMovieShopService } from '../Hoc';
import Spinner from '../Spinner';
import { moviesFetching, movieAddToCart } from '../../actions/Actions';
import ErrorIndicator from '../ErrorIndicator';

import './MovieList.scss';


class MovieList extends Component {

  componentDidMount() {
    this.props.moviesFetching();
  }

  render() {

    const { movies, loading, error, onAddedtoCart } = this.props;

    if (loading) {
      return (
        <div className='alt'>
          <Spinner />
        </div>
      )
    }

    if (error) {
      return <ErrorIndicator />
    }

    return (

      <ul className='list' >
        {
          movies.map((movie) => {
            return (
              <li
                className='listItem'
                key={movie.id}>
                <MovieListItem
                  movie={movie}
                  onAddedtoCart={() => onAddedtoCart(movie.id)}
                />
              </li>
            )
          })
        }
      </ul>

    );
  }
}

const mapStateToProps = ({ movies, loading, error }) => {
  return {
    movies,
    loading,
    error,
  }
}

const mapDispatchToProps = (dispatch, { movieShopService }) => {
  return {
    moviesFetching: moviesFetching(movieShopService, dispatch),
    onAddedtoCart: (id) => dispatch(movieAddToCart(id))
  }
}


export default withMovieShopService()(connect(
  mapStateToProps, mapDispatchToProps)(MovieList)
);