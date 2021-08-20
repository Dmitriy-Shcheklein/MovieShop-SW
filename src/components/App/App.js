import React from 'react';
import MovieList from '../MovieList';
import withMovieShopService from '../Hoc';

const App = ({ movieShopService }) => {

  console.log(movieShopService.getAllMovies())

  return (
    <div>sdad</div>
  )
}

export default withMovieShopService()(App);