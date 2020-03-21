import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "../actions/types";

const initialState = {
  cartProducts: [],
  cartTotal: 0,
  cartCostTotal: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      action.productToAdd.quanity = 1;
      let existedItem = state.cartProducts.find(
        product => action.productToAdd.id === product.id
      );
      if (existedItem) {
        action.productToAdd.quanity += 1;

        console.log(existedItem);
        return {
          ...state,
          cartCostTotal: state.cartCostTotal + action.productToAdd.price
        };
      } else {
        let newTotal = state.cartCostTotal + action.productToAdd.price;
        return {
          ...state,
          cartProducts: [...state.cartProducts, action.productToAdd],
          cartTotal: (state.cartTotal += 1),
          cartCostTotal: newTotal
        };
      }

    default:
      return state;
  }
};
