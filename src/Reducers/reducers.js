
const initialState = {
  movies: [],
  loading: true,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_MOVIES_REQUEST':
      return {
        movies: [],
        loading: true,
      };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        movies: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}


export default reducer;