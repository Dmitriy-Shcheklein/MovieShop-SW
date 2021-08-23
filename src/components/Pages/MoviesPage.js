import React from 'react';
import CartTable from '../CartTable';
import MovieListContainer from '../MovieList';

const MoviesPage = () => {
  return (
    <div>
      <MovieListContainer />
      <CartTable />
    </div>
  )
}

export default MoviesPage;
