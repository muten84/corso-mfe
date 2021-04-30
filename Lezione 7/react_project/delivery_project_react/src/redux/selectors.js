export const getCartState = (store) => {
  return store.cart;
};

export const getCartItemList = (store) => {
  return getCartState(store) ? getCartState(store).items : [];
};
