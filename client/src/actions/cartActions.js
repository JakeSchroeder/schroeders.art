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

  let productItemForCart = {
    productToAdd: productToAdd,
    quantity: 1
  };

  dispatch({
    type: ADD_TO_CART,
    payload: productItemForCart
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
    productId: productId
  });
};

export const addQuantity = productId => dispatch => {
  dispatch({
    type: ADD_QUANTITY,
    productId: productId
  });
};
