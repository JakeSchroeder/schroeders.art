import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import useCurrencyFormat from "../hooks/useCurrencyFormat";
import Colors from "./utils/Colors";

import {
  subtractQuantity,
  addQuantity,
  removeItem
} from "../actions/cartActions";

import Product from "./Product";

const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserTitle = styled.h1``;

const BackToShopping = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CartView = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  overflow-x: auto;
`;

const ProductWrapper = styled.div`
  max-width: 300px;
  position: relative;
`;

const ProductCartWrapper = styled.div`
  min-width: 300px;

  /* border: 1px solid #b72a2a; */

  padding-left: 32px;
  padding-right: 32px;
`;

const ProductFooter = styled.div`
  /* height: 40px; */
  width: 100%;
  /* border-top: 1px solid #554848; */
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
  border: 18px solid ${Colors.Gray};
  box-shadow: -4px 4px 8px -2px rgba(0, 0, 0, 0.77);
  /* cursor: pointer; */
`;

const ProductImage = styled.img`
  display: block;
  width: 100%;
`;

const ProductDelete = styled.button`
  position: absolute;
  top: -8.75px;
  right: -8.75px;
  width: 35px;
  height: 35px;
  z-index: 999;
  background: ${Colors.Primary};
`;

const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
`;

const ProductQuantityAmount = styled.p`
  padding-left: 16px;
  padding-right: 16px;
`;

const IncrementQuantity = styled.button`
  width: 35px;
  background: ${Colors.Primary};
  height: 35px;
`;
const DecrementQuantity = styled.button`
  width: 35px;
  background: ${Colors.Primary};
  height: 35px;
`;

const TotalCost = styled.h1``;

const CheckoutWrapper = styled.div`
  padding-top: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Checkout = styled.button`
  width: 200px;
  height: 70px;
  outline: none;
  background: ${Colors.Primary};
`;

// const ProductInCart = styled.div``;

// const ProductImg = styled.img``;

// const ProductTitle = styled.p``;

// const ProductPrice = styled.p``;

const Cart = props => {
  const { name } = props.auth.user;

  function capitalizeName(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
  }

  function setCurrencyFormat(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(value);
  }

  return (
    <>
      <UserWrapper>
        <UserTitle>
          {name ? `${capitalizeName(name)}'s Cart` : `Guest Cart`}
        </UserTitle>
        <BackToShopping to="/">Continue Shopping</BackToShopping>
      </UserWrapper>
      <CartView>
        {props.cart.cartTotal > 0 ? (
          props.cart.cartProducts.map(product => (
            <ProductCartWrapper>
              <ProductWrapper>
                <ProductDelete
                  onClick={() => {
                    props.removeItem(product.productToAdd.id);
                  }}
                >
                  x
                </ProductDelete>
                <ProductImageWrapper>
                  <ProductImage
                    src={product.productToAdd.img_src}
                    alt={`image of ${product.title}`}
                  />

                  {/* <ProductOverlay>
                    <ActionWrapper>
                      <MoreInfo />
                    </ActionWrapper>
                  </ProductOverlay> */}
                </ProductImageWrapper>

                <ProductFooter>
                  <ProductInfo>
                    <ProductTitle>{product.productToAdd.title}</ProductTitle>
                    <ProductPrice>
                      {setCurrencyFormat(product.productToAdd.price)}
                    </ProductPrice>
                  </ProductInfo>
                  <ProductQuantity>
                    <IncrementQuantity
                      onClick={() => {
                        props.addQuantity(product.productToAdd.id);
                      }}
                    >
                      +
                    </IncrementQuantity>
                    <ProductQuantityAmount>
                      {product.quantity || 1}
                    </ProductQuantityAmount>
                    <DecrementQuantity
                      onClick={() => {
                        props.subtractQuantity(product.productToAdd.id);
                      }}
                    >
                      -
                    </DecrementQuantity>
                  </ProductQuantity>
                </ProductFooter>
              </ProductWrapper>
            </ProductCartWrapper>
          ))
        ) : (
          <>No Items In Cart</>
        )}
      </CartView>
      <CheckoutWrapper>
        <TotalCost>
          Cart Total: {useCurrencyFormat(props.cart.cartCostTotal)}
        </TotalCost>
        <Checkout>Checkout</Checkout>
      </CheckoutWrapper>
    </>
  );
};

Cart.propTypes = {
  subtractQuantity: PropTypes.func.isRequired,
  addQuantity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.cart
});

export default connect(mapStateToProps, {
  subtractQuantity,
  addQuantity,
  removeItem
})(Cart);
