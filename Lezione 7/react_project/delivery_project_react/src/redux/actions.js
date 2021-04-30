import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

let nextTodoId = 0;

export const addToCart = (content) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: ++nextTodoId,
      content,
    },
  };
};

export const removeFromCart = (idx) => ({
  type: REMOVE_FROM_CART,
  payload: { idx },
});
