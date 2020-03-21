import axios from "axios";

import {
  GET_ERRORS,
  GET_PRODUCTS,
  PRODUCTS_LOADING,
  GET_PRODUCT_FILTERS,
  SET_CURRENT_FILTER
} from "./types";

// Get all products from database
export const getProducts = () => dispatch => {
  dispatch(setProductsLoading());
  axios
    // .get("/api/products")
    .get("db.json")
    .then(res => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Set the loading state
export const setProductsLoading = () => {
  return {
    type: PRODUCTS_LOADING
  };
};

// export const getProductFilters = (dispatch, productsToFilter) => {
//   let unFilteredArr = [];
//   let filteredArr = [];

//   productsToFilter.map(product => {
//     product.collection.map(item => {
//       unFilteredArr.push(item);
//     });
//   });

//   filteredArr = unFilteredArr.filter((a, b) => unFilteredArr.indexOf(a) === b);

//   dispatch({
//     type: GET_PRODUCT_FILTERS,
//     payload: filteredArr
//   });
// };

// export const setProductFilter = selectedFilter => {
//   return {
//     type: SET_CURRENT_FILTER,
//     payload: selectedFilter
//   };
// };
