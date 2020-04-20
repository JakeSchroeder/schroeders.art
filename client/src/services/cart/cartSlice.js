import {
  createSlice,
  createEntityAdapter,
  createSelector
} from "@reduxjs/toolkit";

const adapter = createEntityAdapter({ selectId: item => item._id });

const initialState = adapter.getInitialState();
const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      console.log(payload);
      const { _id } = payload;
      // it already exists, so let's increase the quantity
      if (state.entities[_id]) {
        state.entities[_id].quantity += 1;
      } else {
        // just spread the original product and add a quantity
        adapter.addOne(state, { ...payload, quantity: 1 });
      }
    },
    removeFromCart: adapter.removeOne,
    increaseQuantity: (state, { payload: _id }) => {
      if (state.entities[_id]) {
        state.entities[_id].quantity += 1;
      }
    },
    decreaseQuantity: (state, { payload: _id }) => {
      if (state.entities[_id]) {
        const quantity = state.entities[_id].quantity;
        if (quantity > 1) {
          state.entities[_id].quantity -= 1;
        } else {
          adapter.removeOne(state, _id);
        }
      }
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} = slice.actions;

export default slice.reducer;

export const {
  selectIds: selectShoppingCartIds,
  selectEntities: selectShoppingCartEntities,
  selectAll: selectAllShoppingCartItems,
  selectTotal: selectShoppingCartCount
} = adapter.getSelectors(state => state.cart);

// total by the quantity of items in the cart
export const selectCartTotalWithQuantity = createSelector(
  selectShoppingCartEntities,
  entities =>
    Object.values(entities).reduce((sum, curr) => {
      sum += curr.quantity;
      return sum;
    }, 0)
);

// do the same thing for sub totals, etc
export const selectCartSubTotal = createSelector(
  selectShoppingCartEntities,
  entities =>
    Object.values(entities).reduce((sum, p) => {
      sum += p.price * p.quantity;
      return sum;
    }, 0)
);
