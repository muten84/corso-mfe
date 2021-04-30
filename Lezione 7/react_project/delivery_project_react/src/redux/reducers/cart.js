import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes";

const initialState = {
  items: [],
};

/**
 * action dispatcher map props from incoming component to increment new state
 * @param {*} state
 * @param {*} action
 */
const dispatchAction = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, content } = action.payload;
      return {
        ...state,
        items: [...state.items, content],
      };
    }
    case REMOVE_FROM_CART: {
      const { idx } = action.payload;
      delete state.items[idx];
      return {
        ...state,
        items: state.items.filter((o) => o !== undefined),
      };
    }
    default:
      return state;
  }
};

export default dispatchAction;
