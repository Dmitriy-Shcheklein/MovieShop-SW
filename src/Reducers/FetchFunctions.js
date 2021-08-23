
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

const figurinesRequest = (state) => {
  return {
    ...state,
    figurines: [],
    loading: true,
    error: null,
  };
}

const figurinesSuccess = (state, newFigurines) => {
  return {
    ...state,
    figurines: newFigurines,
    loading: false,
    error: null,
  };
}

const figurinesFailed = (state, error) => {
  return {
    ...state,
    figurines: [],
    loading: false,
    error,
  };
}


export {
  movieFailed,
  movieSuccess,
  movieRequest,
  figurinesFailed,
  figurinesRequest,
  figurinesSuccess,
}