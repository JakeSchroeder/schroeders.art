import React from "react";
import styled from "styled-components";
import Product from "./Product";
import Spinner from "../../../Spinner";

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  position: relative;
`;

const ProductList = ({ products, loading }) => (
  <ProductListWrapper>
    {loading && <Spinner />}
    {products.map(p => (
      <Product product={p} key={p._id} />
    ))}
  </ProductListWrapper>
);

export default ProductList;
