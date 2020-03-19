import React from "react";
import styled from "styled-components";

import Colors from "../utils/Colors";

const CategoriesInner = styled.div`
  width: 30%;
  padding-right: 32px;
  padding-left: 16px;
`;

const CategoriesList = styled.ul`
  text-align: left;
`;

const CategoriesItem = styled.li`
  cursor: pointer;
  font-size: 3.2rem;
  list-style: none;
  /* border: 9px solid ${Colors.Gray}; */
  padding: 16px;
  background: ${Colors.White};
  border: 1px solid transparent;
 
  width: 100%;
  margin-bottom: 16px;

  &:hover {
    border: 1px solid ${Colors.Border};
  }

  &.active {
    border: 1px solid ${Colors.Border};
    background: ${Colors.Primary};
    text-decoration: underline;
  }

`;

const Categories = () => {
  return (
    <CategoriesInner>
      <CategoriesList>
        <CategoriesItem className="active">All</CategoriesItem>
        <CategoriesItem>Popular</CategoriesItem>
        <CategoriesItem>Bedroom</CategoriesItem>
        <CategoriesItem>Bathroom</CategoriesItem>
        <CategoriesItem>Den</CategoriesItem>
        <CategoriesItem>Kitchen</CategoriesItem>
        <CategoriesItem>Study</CategoriesItem>
        <CategoriesItem>Utility</CategoriesItem>
      </CategoriesList>
    </CategoriesInner>
  );
};

export default Categories;
