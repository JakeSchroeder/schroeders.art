import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.div`
  padding: 32px;
`;

const HeaderWrapper = styled.header`
  padding-left: 32px;
  padding-right: 32px;
  background: #e8e2e2;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
`;

const Aside = styled.aside`
  min-width: 220px;
  max-width: 220px;
  background: #965959;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e0e0e0;
`;

const Nav = styled.nav``;

const List = styled.ul`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ListItem = styled.li`
  margin-right: 16px;

  @media (max-width: 800px) {
    margin-right: 0;
    margin-top: 8px;
    margin-bottom: 8px;
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
`;

const AsideHeader = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AsideLogo = styled.h2`
  font-size: 22px;
  margin: 0;
`;

const AsideContent = styled.div`
  padding: 32px;
`;

const Header = () => (
  <HeaderWrapper>
    <Nav>
      <List>
        <ListItem>
          <ListLink to="/">Gallery</ListLink>
        </ListItem>
        <ListItem>
          <ListLink to="/about">About</ListLink>
        </ListItem>
        <ListItem>
          <ListLink to="/contact">Contact</ListLink>
        </ListItem>
      </List>
    </Nav>

    <Nav>
      <List>
        <ListItem>
          <ListLink to="/Login">Login</ListLink>
        </ListItem>
        <ListItem>
          <ListLink to="/register">Register</ListLink>
        </ListItem>
      </List>
    </Nav>
  </HeaderWrapper>
);

const Sidebar = () => (
  <Aside>
    <AsideHeader>
      <AsideLogo>
        <ListLink to="/">Schroeder's Art</ListLink>
      </AsideLogo>
    </AsideHeader>
    <AsideContent>Categories</AsideContent>
  </Aside>
);

const Layout = ({ children }) => (
  <Wrapper>
    <Sidebar />
    <ContentWrapper>
      <Header />
      <Content>{children}</Content>
    </ContentWrapper>
  </Wrapper>
);

export default Layout;
