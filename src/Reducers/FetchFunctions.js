
const movieRequest = (state) => {
  return {
    ...state,
    movies: [],
    loading: true,
    error: null,
  };
}

const movieSuccess = (state, newMovies) => {
  return {
    ...state,
    movies: newMovies,
    loading: false,
    error: null,
  };
}

const movieFailed = (state, error) => {
  return {
    ...state,
    movies: [],
    loading: false,
    error,
  };
}

export {
  movieFailed,
  movieSuccess,
  movieRequest
}