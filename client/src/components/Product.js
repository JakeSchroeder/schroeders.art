import React from "react";
import styled from "styled-components";
// import test_src from "../img/painting1.png";

const ProductWrapper = styled.div`
  min-width: 300px;

  /* border: 1px solid #b72a2a; */
  display: flex;
  flex-direction: column;
  padding-right: 32px;
  padding-bottom: 32px;
  flex: 1;
`;

const ProductFooter = styled.div`
  /* height: 40px; */
  width: 100%;
  border-top: 1px solid #554848;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding: 8px 0;
`;

const ProductInfo = styled.div``;

const ProductTitle = styled.p``;

const ProductPrice = styled.p`
  color: #b72a2a;
`;

const ProductImageWrapper = styled.div`
  position: relative;
  /* cursor: pointer; */
`;

const ProductImage = styled.img`
  display: block;
  width: 100%;
  box-shadow: -4px 4px 8px -2px rgba(0, 0, 0, 0.77);
`;

const ProductOverlay = styled.div`
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  transition: all 0.5s ease;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ${ProductImageWrapper}:hover & {
    opacity: 1;
    background: rgba(0, 0, 0, 0.66);
    transition: all 0.5s ease;
  }
`;

const ActionWrapper = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledButton = styled.button`
  border: 0;
  background: ${({ outline }) => (outline ? `none` : `#b72a2a`)};
  color: ${({ outline }) => (outline ? `#fff` : `inherit`)};
  width: 100px;
  height: 32px;
  cursor: pointer;
  margin-bottom: 16px;
  border: 1px solid ${({ outline }) => (outline ? `#b72a2a` : `#554848`)};

  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const MoreInfo = () => <StyledButton outline>More Info</StyledButton>;

const AddCart = () => <StyledButton>Add To Cart</StyledButton>;

const Product = ({ img, title, price }) => {
  return (
    <ProductWrapper>
      <ProductImageWrapper>
        <ProductImage src={img} alt="product image" />

        <ProductOverlay>
          <ActionWrapper>
            <MoreInfo />
          </ActionWrapper>
        </ProductOverlay>
      </ProductImageWrapper>

      <ProductFooter>
        <ProductInfo>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{price}</ProductPrice>
        </ProductInfo>
        <AddCart />
      </ProductFooter>
    </ProductWrapper>
  );
};

export default Product;
