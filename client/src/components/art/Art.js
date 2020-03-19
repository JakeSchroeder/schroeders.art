import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import Hero from "./Hero";
import Categories from "./Categories";
import ProductList from "../ProductList";
import Pagination from "../Pagination";
import Colors from "../utils/Colors";

import { getProducts } from "../../actions/productActions";

import arrow_src from "../../img/down-arrow.svg";

const CategoriesWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const ProductListWrapper = styled.div`
  width: 100%;
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const CategoriesTitle = styled.h1`
  padding-top: 16px;

  padding-bottom: 16px;
`;

const SelectMenu = styled.select`
  max-width: 100%;
  padding-right: 32px;
  outline: 0;
  font-size: 1.8rem;
  font-family: inherit;
  background: none;
  border: 0;
  appearance: none;
  background-image: url(${arrow_src});
  background-repeat: no-repeat;
  background-position: 100%;
  font-family: germania-one, sans-serif;
  background &::-ms-expand {
    display: none;
  }
`;

const Sort = () => {
  const [filter, setFilter] = useState(2);

  const updateFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <SelectMenu value={filter} onChange={updateFilter}>
      <option value={1}>Sort Newest</option>
      <option value={2}>Sort Price (low to high)</option>
      <option value={3}>Sort Price (high to low)</option>
    </SelectMenu>
  );
};

const Art = props => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  //getch products on component mount
  useEffect(() => {
    props.getProducts();
  }, []);

  const currentProducts = props.products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const changePage = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Hero />
      <CategoriesWrapper>
        <Categories />
        <ProductListWrapper>
          <SortWrapper>
            <CategoriesTitle>Showing All Posters</CategoriesTitle>
            <Sort />
          </SortWrapper>
          {props.productsLoading ? (
            <>loading art...</>
          ) : (
            <ProductList id="gallery" productsToShow={currentProducts} />
          )}

          <Pagination
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            totalProducts={props.products.length}
            changePage={changePage}
          ></Pagination>
        </ProductListWrapper>
      </CategoriesWrapper>
    </>
  );
};

Art.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.array
};

const mapStateToProps = state => ({
  products: state.products.products,
  productsLoading: state.products.productsLoading
});

export default connect(mapStateToProps, { getProducts })(Art);
