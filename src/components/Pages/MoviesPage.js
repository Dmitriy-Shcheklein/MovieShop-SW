import React from 'react';
import CartTable from '../CartTable';
import MovieListContainer from '../MovieList';
import { Fragment } from 'react';

const MoviesPage = () => {
  return (
    <Fragment>
      <MovieListContainer />
      <CartTable />
    </Fragment>
  )
}

export default MoviesPage;
