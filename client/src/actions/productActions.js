import axios from "axios";

import { GET_ERRORS, GET_PRODUCTS, PRODUCTS_LOADING } from "./types";

// Register User
export const getProducts = () => dispatch => {
  dispatch(setProductsLoading());
  axios
    .get("/api/products")
    .then(res => {
      console.log(res.data);
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

export const setProductsLoading = () => {
  return {
    type: PRODUCTS_LOADING
  };
};
