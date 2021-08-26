
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

const formSending = (state) => {
  return {
    ...state,
    sendingForm: true,
    sendingFormError: null,
    orderInfo: [],
  };
}

const formSuccess = (state, newOrderInfo) => {
  return {
    ...state,
    sendingForm: false,
    sendingFormError: null,
    orderInfo: newOrderInfo,
  }
}

const formError = (state, error) => {
  return {
    ...state,
    sendingForm: false,
    sendingFormError: error,
    orderInfo: [],
  }
}

export {
  movieFailed,
  movieSuccess,
  movieRequest,
  figurinesFailed,
  figurinesRequest,
  figurinesSuccess,
  formSending,
  formSuccess,
  formError,
}