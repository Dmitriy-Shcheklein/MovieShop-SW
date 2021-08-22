import React from 'react';
import CartTable from '../CartTable';
import MovieList from '../MovieList';

const MoviesPage = () => {
  return (
    <div>
      <MovieList />
      <CartTable />
    </div>
  )
}

export default MoviesPage;
