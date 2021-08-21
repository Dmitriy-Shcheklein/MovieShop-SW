
const moviesLoaded = (newMovies) => {
  return {
    type: 'FETCH_MOVIES_SUCCESS',
    payload: newMovies,
  };
};

const moviesLoadedSuccess = () => {
  return {
    type: 'FETCH_MOVIES_REQUEST',
  }
}


export {
  moviesLoaded,
  moviesLoadedSuccess,
}

