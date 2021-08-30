import React from 'react';
import withWidth, { isWidthDown, isWidthUp } from '@material-ui/core/withWidth';
import MovieListItemDesktop from './MovieListItemDesktop';
import MovieListItemLaptop from './MovieListItemLaptop';
import MovieListItemTablet from './MovieListItemTablet';
import MovieListItemMobile from './MovieListItemMobile';


const MovieListItem = (props) => {

  const { movie, onAddedtoCart } = props;

  if (isWidthDown('xs', props.width)) {
    return <MovieListItemMobile
      movie={movie}
      onAddedtoCart={onAddedtoCart}
    />
  } else if (isWidthDown('sm', props.width)) {
    return <MovieListItemTablet
      movie={movie}
      onAddedtoCart={onAddedtoCart}
    />
  } else if ((isWidthDown('md', props.width))) {
    return <MovieListItemLaptop
      movie={movie}
      onAddedtoCart={onAddedtoCart}
    />
  } else if ((isWidthUp('md', props.width))) {
    return <MovieListItemDesktop
      movie={movie}
      onAddedtoCart={onAddedtoCart}
    />
  } else {
    return null
  }
}

export default withWidth()(MovieListItem);