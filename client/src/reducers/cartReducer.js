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
  let cartProductsCopy = state.cartProducts.slice();

  switch (action.type) {
    case ADD_TO_CART:
      let existedItem = state.cartProducts.find(product => {
        return action.payload.productToAdd.id === product.productToAdd.id;
      });
      console.log(existedItem);
      // console.log(state.cartProducts);
      if (existedItem) {
        //  console.log(action.payload.quantity);
        let cartProductsCopy = state.cartProducts.slice();
        let i = cartProductsCopy.findIndex(
          product => action.payload.productToAdd.id === product.productToAdd.id
        );

        console.log(cartProductsCopy[i]);
        cartProductsCopy[i].quantity++;
        return {
          ...state,
          cartProducts: cartProductsCopy,
          cartTotal: state.cartTotal + 1,
          cartCostTotal: state.cartCostTotal + action.payload.productToAdd.price
        };
      } else {
        let newTotal = state.cartCostTotal + action.payload.productToAdd.price;

        return {
          ...state,
          cartProducts: [...state.cartProducts, action.payload],
          cartTotal: state.cartTotal + 1,
          cartCostTotal: newTotal
        };
      }
    case ADD_QUANTITY:
      let x = cartProductsCopy.findIndex(
        product => action.productId === product.productToAdd.id
      );
      cartProductsCopy[x].quantity++;

      let newTotal1 =
        state.cartCostTotal + cartProductsCopy[x].productToAdd.price;

      return {
        ...state,
        cartProducts: cartProductsCopy,
        cartTotal: state.cartTotal + 1,
        cartCostTotal: newTotal1
      };

    case SUB_QUANTITY:
      let i = cartProductsCopy.findIndex(
        product => action.productId === product.productToAdd.id
      );

      cartProductsCopy[i].quantity--;
      let newTotal =
        state.cartCostTotal - cartProductsCopy[i].productToAdd.price;
      if (cartProductsCopy[i].quantity < 1) {
        cartProductsCopy.splice(i, 1);
        return {
          ...state,
          cartProducts: cartProductsCopy,
          cartTotal: state.cartTotal - 1,
          cartCostTotal: newTotal
        };
      }

      return {
        ...state,
        cartProducts: cartProductsCopy,
        cartTotal: state.cartTotal - 1,
        cartCostTotal: newTotal
      };
    case REMOVE_ITEM:
      let y = cartProductsCopy.findIndex(product => {
        return action.productId === product.productToAdd.id;
      });

      let newTotal2 =
        state.cartCostTotal -
        cartProductsCopy[y].productToAdd.price * cartProductsCopy[y].quantity;
      let newCartTotal = state.cartTotal - cartProductsCopy[y].quantity;
      cartProductsCopy.splice(y, 1);
      return {
        ...state,
        cartProducts: cartProductsCopy,
        cartTotal: newCartTotal,
        cartCostTotal: newTotal2
      };
    default:
      return state;
  }
};
