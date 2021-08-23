
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

const updateCartListItem = (product, item, quantity) => {

  if (item) {
    return {
      ...item,
      count: item.count + quantity,
      total: item.total + (product.price * quantity),
    };
  } else {
    return {
      id: product.id,
      title: product.title,
      count: 1,
      total: product.price,
    };
  }
}

const updateAllOrder = (state, productId, quantity) => {

  const product = (
    state.movies.find((product) => product.id === productId) ||
    state.figurines.find((product) => product.id === productId)
  );
  const itemIdx = state.cartList.findIndex(({ id }) => id === productId);
  const item = state.cartList[itemIdx];

  const newItem = updateCartListItem(product, item, quantity);
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