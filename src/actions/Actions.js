
const movieLoaded = (newMovies) => {
  return {
    type: 'FETCH_MOVIES_SUCCESS',
    payload: newMovies,
  };
};

export {
  movieLoaded,
}

