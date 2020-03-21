import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "./types";

export const addToCart = productId => (dispatch, getState) => {
  let productToAdd = getState().products.products.find(
    product => product.id === productId
  );

  dispatch({
    type: ADD_TO_CART,
    productToAdd: productToAdd
  });
};

export const removeItem = productId => dispatch => {
  dispatch({
    type: REMOVE_ITEM,
    productId: productId
  });
};

export const subtractQuantity = productId => dispatch => {
  dispatch({
    type: SUB_QUANTITY,
    productId
  });
};
