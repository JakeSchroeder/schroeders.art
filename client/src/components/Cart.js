import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Colors from "./utils/Colors";

import Product from "./Product";

const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserTitle = styled.h1``;

const CartView = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  overflow-x: auto;
`;

const ProductWrapper = styled.div`
  max-width: 300px;
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

  return (
    <>
      <UserTitle>
        {name ? `${capitalizeName(name)}'s Cart` : `Guest Cart`}
      </UserTitle>
      <CartView>
        {props.cart.cartTotal > 0 ? (
          props.cart.cartProducts.map(product => (
            <ProductWrapper>
              <Product
                key={product.id}
                id={product.id}
                img={product.img_src}
                title={product.title}
                price={product.price}
                noButton
              />
            </ProductWrapper>
          ))
        ) : (
          <>No Items In Cart</>
        )}
      </CartView>
      <CheckoutWrapper>
        <TotalCost>Cart Total: $400.00</TotalCost>
        <Checkout>Checkout</Checkout>
      </CheckoutWrapper>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.cart
});

export default connect(mapStateToProps)(withRouter(Cart));
