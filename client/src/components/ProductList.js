import React from "react";
import styled from "styled-components";
import Product from "./Product";

const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductList = ({ data }) => {
  const products = data;
  const productItems = products.map(product => (
    <Product
      key={product.title}
      img={product.img_src}
      title={product.title}
      price={product.price}
    />
  ));

  return <ProductListWrapper>{productItems}</ProductListWrapper>;
};

export default ProductList;
