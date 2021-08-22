
const moviesLoadedSuccess = (newMovies) => {
  return {
    type: 'FETCH_MOVIES_SUCCESS',
    payload: newMovies,
  };
};

const moviesLoading = () => {
  return {
    type: 'FETCH_MOVIES_REQUEST',
  }
}

const moviesError = (error) => {
  return {
    type: 'FETCH_MOVIES_FAILED',
    payload: error,
  }
}

const moviesFetching = (movieShopService, dispatch) => () => {
  dispatch(moviesLoading());
  movieShopService.getAllMovies()
    .then((data) => dispatch(moviesLoadedSuccess(data)))
    .catch((error) => dispatch(moviesError(error)));
}

const movieAddToCart = (movieId) => {
  return {
    type: 'MOVIE_ADDED_TO_CART',
    payload: movieId,
  }
}

const movieDecreaseFromCart = (movieId) => {
  return {
    type: 'MOVIE_DECREASE_FROM_CART',
    payload: movieId,
  }
}

const movieDeleteAllToCart = (movieId) => {
  return {
    type: 'MOVIE_ALL_DELETE_TO_CART',
    payload: movieId,
  }
}


export {
  movieDeleteAllToCart,
  movieDecreaseFromCart,
  movieAddToCart,
  moviesFetching,
}

