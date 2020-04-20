import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  selectAllShoppingCartItems,
  selectCartSubTotal,
  increaseQuantity,
  decreaseQuantity
} from "../../services/cart/cartSlice";
import { Link } from "react-router-dom";

import CartProduct from "./CartProduct";
import useCurrencyFormat from "../../hooks/useCurrencyFormat";
import Colors from "../utils/Colors";

//import { updateCart } from "../../services/total/actions";

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

const Cart = props => {
  const dispatch = useDispatch();
  const productsInCart = useSelector(selectAllShoppingCartItems);
  const cartTotal = useCurrencyFormat(useSelector(selectCartSubTotal));

  return (
    <>
      <CartView>
        {productsInCart.length ? (
          productsInCart.map(p => {
            return (
              <CartProduct
                product={p}
                removeProduct={() => dispatch(removeFromCart(p._id))}
                onIncrease={() => dispatch(increaseQuantity(p._id))}
                onDecrease={() => dispatch(decreaseQuantity(p._id))}
                key={p._id}
              />
            );
          })
        ) : (
          <p>
            Add some products in the cart <br />
            :)
          </p>
        )}
      </CartView>
      <TotalCost>Cart Total: {cartTotal}</TotalCost>
    </>
  );
};

export default Cart;
