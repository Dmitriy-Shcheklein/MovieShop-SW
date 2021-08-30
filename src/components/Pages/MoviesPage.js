import React from 'react';
import MovieListContainer from '../MovieList';
import ErrorBoundry from '../ErrorBoundry';

const MoviesPage = () => {
  return (
    <ErrorBoundry>
      <section>
        <MovieListContainer />
      </section>
    </ErrorBoundry>
  )
}

export default MoviesPage;
