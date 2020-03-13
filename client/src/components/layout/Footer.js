import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Colors from "../utils/Colors";

const FooterWrapper = styled.div`
  height: 200px;
  background: ${Colors.Primary};
  border-top: 1px solid ${Colors.Border};
`;

const FooterInner = styled.div`
  max-width: 1400px;
  padding: 0 80px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Nav = styled.nav``;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 16px;
  display: inline-block;
  /* padding-top: 8px; */
  list-style: none;
  /* margin-top: ${({ mt }) => (mt ? `8px` : 0)};
  padding-top: ${({ pt }) => (pt ? `16px` : 0)}; */


/* 
  &.active {
    text-decoration: underline;

  } */

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

const CopyRight = styled.p``;

const Footer = () => (
  <FooterWrapper>
    <FooterInner>
      <List>
        <ListItem>
          <ListLink exact to="/privacy" activeClassName="is-active">
            Privacy Policy
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink exact to="/help" activeClassName="is-active">
            Help
          </ListLink>
        </ListItem>
      </List>
      <CopyRight>© Schroeders Art Inc. All rights reserved.</CopyRight>
      <List>
        <ListItem>
          <ListLink exact to="/">
            Track Order
          </ListLink>
        </ListItem>
      </List>
    </FooterInner>
  </FooterWrapper>
);

export default Footer;
