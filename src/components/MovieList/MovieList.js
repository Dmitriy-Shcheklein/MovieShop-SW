import React from 'react'
import MovieListItem from './MovieListItem';
import { connect } from 'react-redux';
import { productAddToCart } from '../../actions/Actions';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  li: {
    listStyleType: 'none',
    margin: '0 auto',
  },
  ul: {
    padding: '0',
  }
})

const MovieList = ({ movies, onAddedtoCart }) => {

  const classes = useStyles();

  return (

    <ul className={classes.ul}>
      {
        movies.map((movie) => {
          return (
            <li className={classes.li}
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
    onAddedtoCart: (id) => dispatch(productAddToCart(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);