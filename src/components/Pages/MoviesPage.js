import React from 'react';
import CartTable from '../CartTable';
import MovieListContainer from '../MovieList';
import ErrorBoundry from '../ErrorBoundry';

const MoviesPage = () => {
  return (
    <ErrorBoundry>
      <MovieListContainer />
      <CartTable />
    </ErrorBoundry>
  )
}

export default MoviesPage;
