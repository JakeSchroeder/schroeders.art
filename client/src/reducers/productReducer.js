import {
  GET_PRODUCTS,
  PRODUCTS_LOADING,
  GET_PRODUCT_FILTERS,
  SET_CURRENT_FILTER
} from "../actions/types";

const initialState = {
  products: [],
  productsLoading: false
  // productFilters: [],
  // currentFilter: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsLoading: false
      };
    case PRODUCTS_LOADING:
      console.log("Loading");
      return {
        ...state,
        productsLoading: true
      };

    default:
      return state;
  }
}
