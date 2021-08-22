
const updateCartList = (cartList, newItem, itemIdx) => {

  if (newItem.count === 0) {
    return [
      ...cartList.slice(0, itemIdx),
      ...cartList.slice(itemIdx + 1),
    ]
  }

  if (itemIdx === -1) {
    return [
      ...cartList,
      newItem,
    ]
  };

  return [
    ...cartList.slice(0, itemIdx),
    newItem,
    ...cartList.slice(itemIdx + 1),
  ]
};

const updateCartListItem = (movie, item, quantity) => {

  if (item) {
    return {
      ...item,
      count: item.count + quantity,
      total: item.total + (movie.price * quantity),
    };
  } else {
    return {
      id: movie.id,
      title: movie.title,
      count: 1,
      total: movie.price,
    };
  }
}

const updateAllOrder = (state, movieId, quantity) => {

  const movie = state.movies.find((movie) => movie.id === movieId);
  const itemIdx = state.cartList.findIndex(({ id }) => id === movieId);
  const item = state.cartList[itemIdx];

  const newItem = updateCartListItem(movie, item, quantity);
  const cartList = updateCartList(state.cartList, newItem, itemIdx);

  const allOrder = cartList.reduce((accum, item) => accum + item.total, 0);

  return {
    ...state,
    cartList,
    allOrder,
  };
}

export {
  updateAllOrder,
}