
const initialState = {
  movies: [],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESS':
      return {
        movies: action.payload,
      };
    default:
      return state;
  }
}


export default reducer;