import React from 'react'
import MovieListItem from './MovieListItem';
import { connect } from 'react-redux';
import { productAddToCart } from '../../actions/Actions';

const MovieList = ({ movies, onAddedtoCart }) => {

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

const mapStateToProps = ({ movies }) => {
  return {
    movies,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddedtoCart: (id) => dispatch(productAddToCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);