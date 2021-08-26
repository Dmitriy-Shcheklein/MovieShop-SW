import { cleanOrder, updateAllOrder } from "./CartFunctions";
import {
  movieFailed, movieSuccess, movieRequest,
  figurinesFailed, figurinesRequest, figurinesSuccess,
} from "./FetchFunctions";

const initialState = {
  movies: [],
  figurines: [],
  loading: true,
  error: null,
  cartList: [],
  allOrder: null,
  sendingForm: true,
  sendingFormError: null,
  orderInfo: [],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'FETCH_MOVIES_REQUEST':
      return movieRequest(state);

    case 'FETCH_MOVIES_SUCCESS':
      return movieSuccess(state, action.payload);

    case 'FETCH_MOVIES_FAILED':
      return movieFailed(state, action.payload);

    case 'FETCH_FIGURINES_REQUEST':
      return figurinesRequest(state);

    case 'FETCH_FIGURINES_SUCCESS':
      return figurinesSuccess(state, action.payload);

    case 'FETCH_FIGURINES_FAILED':
      return figurinesFailed(state, action.payload);

    case 'PRODUCT_ADDED_TO_CART':
      return updateAllOrder(state, action.payload, +1);

    case 'PRODUCT_DECREASE_FROM_CART':
      return updateAllOrder(state, action.payload, -1);

    case 'PRODUCT_ALL_DELETE_TO_CART':
      const items = state.cartList.find((item) => item.id === action.payload);
      return updateAllOrder(state, action.payload, -items.count);

    case 'CLEAN_CART':
      return cleanOrder(state);

    case 'FETCH_FORM_SENDING':
      return {
        ...state,
        sendingForm: true,
        sendingFormError: null,
        orderInfo: [],
      };

    case 'FETCH_FORM_SUCCESS':
      return {
        ...state,
        sendingForm: false,
        sendingFormError: null,
        orderInfo: action.payload,
      }

    case 'FETCH_FORM_ERROR':
      return {
        ...state,
        sendingForm: false,
        sendingFormError: action.payload,
        orderInfo: [],
      }

    default:
      return state;
  }
}

export default reducer;