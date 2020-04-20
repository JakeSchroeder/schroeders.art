import { combineReducers } from "redux";
// import authReducer from "./auth/reducer";
// import shelfReducer from "./shelf/reducer";
//import cartReducer from "./cart/reducer";
import totalfReducer from "./total/reducer";
import filtersReducer from "./filters/reducer";
import sortReducer from "./sort/reducer";

import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";

export default combineReducers({
  // auth: authReducer,
  // shelf: shelfReducer,
  products: productsReducer,
  cart: cartReducer,
  filters: filtersReducer,
  sort: sortReducer
});
