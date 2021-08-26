import React from 'react';
import CartTable from '../CartTable';
import MovieListContainer from '../MovieList';
import ErrorBoundry from '../ErrorBoundry';

const MoviesPage = () => {
  return (
    <ErrorBoundry>
      <section>
        <MovieListContainer />
        <CartTable />
      </section>
    </ErrorBoundry>
  )
}

export default MoviesPage;
