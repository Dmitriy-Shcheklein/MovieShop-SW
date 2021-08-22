import { updateAllOrder } from "./CartFunctions";
import { movieFailed, movieSuccess, movieRequest } from "./FetchFunctions";

const initialState = {
  movies: [],
  loading: true,
  error: null,
  cartList: [],
  allOrder: null,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'FETCH_MOVIES_REQUEST':
      return movieRequest(state)

    case 'FETCH_MOVIES_SUCCESS':
      return movieSuccess(state, action.payload)

    case 'FETCH_MOVIES_FAILED':
      return movieFailed(state, action.payload)

    case 'MOVIE_ADDED_TO_CART':
      return updateAllOrder(state, action.payload, +1)

    case 'MOVIE_DECREASE_FROM_CART':
      return updateAllOrder(state, action.payload, -1)

    case 'MOVIE_ALL_DELETE_TO_CART':
      const items = state.cartList.find((item) => item.id === action.payload);
      return updateAllOrder(state, action.payload, -items.count)

    default:
      return state;
  }
}


export default reducer;