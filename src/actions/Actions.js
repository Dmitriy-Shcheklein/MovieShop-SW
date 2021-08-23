
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

const figurineFetching = (movieShopService, dispatch) => {
  dispatch(figurinesLoading());
  movieShopService.getAllFigurines()
    .then((data) => dispatch(figurinesLoadedSuccess(data)))
    .catch((error) => dispatch(figurinesError(error)))
}

const productAddToCart = (productId) => {
  return {
    type: 'PRODUCT_ADDED_TO_CART',
    payload: productId,
  }
}

const productDecreaseFromCart = (productId) => {
  return {
    type: 'PRODUCT_DECREASE_FROM_CART',
    payload: productId,
  }
}

const productDeleteAllToCart = (productId) => {
  return {
    type: 'PRODUCT_ALL_DELETE_TO_CART',
    payload: productId,
  }
}

const figurinesLoadedSuccess = (newFigurines) => {
  return {
    type: 'FETCH_FIGURINES_SUCCESS',
    payload: newFigurines,
  };
};

const figurinesLoading = () => {
  return {
    type: 'FETCH_FIGURINES_REQUEST',
  }
}

const figurinesError = (error) => {
  return {
    type: 'FETCH_FIGURINES_FAILED',
    payload: error,
  }
}

export {
  figurineFetching,
  productDeleteAllToCart,
  productDecreaseFromCart,
  productAddToCart,
  moviesFetching,
}

