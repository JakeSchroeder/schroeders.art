import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import logo_src from "../../img/logo.png";

import Colors from "../utils/Colors";

const HeaderWrapper = styled.header`
  background: ${Colors.Primary};
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid ${Colors.Border};
  z-index: 999;
`;

const HeaderWrapperInner = styled.div`
  padding-left: 80px;
  padding-right: 80px;
  max-width: 1400px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogoWrapper = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderLogo = styled.img`
  padding: 0;
  margin: 0;
  width: 100%;
  display: block;
`;

const Nav = styled.nav``;

const RightNav = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.vertical ? `column` : `row`)};
  padding-left: ${props => (props.indented ? `16px` : `0`)};
`;

const ListItem = styled.li`
  margin-right: 16px;
  /* padding-top: 8px; */
  list-style: none;
  margin-top: ${({ mt }) => (mt ? `8px` : 0)};
  padding-top: ${({ pt }) => (pt ? `16px` : 0)};

  display: ${({ flex }) => (flex ? `flex` : `inline-block`)};

  &.active {
    text-decoration: underline;
    list-style: disc;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const ListLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    text-decoration: underline;
  }

  &.is-active {
    text-decoration: underline;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ItemIndicator = styled.div`
  width: 25px;
  height: 25px;
  background: black;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderWrapperInner>
      <Nav>
        <List>
          <ListItem>
            <ListLink exact to="/" activeClassName="is-active">
              Art
            </ListLink>
          </ListItem>
          <ListItem>
            <ListLink exact to="/about" activeClassName="is-active">
              About
            </ListLink>
          </ListItem>
          <ListItem>
            <ListLink exact to="/contact" activeClassName="is-active">
              Contact
            </ListLink>
          </ListItem>
        </List>
      </Nav>

      <HeaderLogoWrapper>
        <ListLink exact to="/">
          <HeaderLogo src={logo_src} alt="Schroeder's Art Logo" />
        </ListLink>
      </HeaderLogoWrapper>

      <RightNav>
        <Nav>
          <List>
            <ListItem>
              <ListLink exact to="/login" activeClassName="is-active">
                Login
              </ListLink>
            </ListItem>
            <ListItem>
              <CartWrapper>
                <ListLink exact to="/cart" activeClassName="is-active">
                  Cart
                </ListLink>
                <ItemIndicator>10</ItemIndicator>
              </CartWrapper>
            </ListItem>
          </List>
        </Nav>
      </RightNav>
    </HeaderWrapperInner>
  </HeaderWrapper>
);

export default Header;
