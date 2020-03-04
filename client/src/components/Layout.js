import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo_src from "../img/logo.png";

const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  /* height: 100vh; */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b72a2a' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
`;

const Content = styled.div`
  padding: 64px;
  /* max-width: 1100px; */
  width: 100%;
  margin: 0 auto;
`;

const HeaderWrapper = styled.header`
  padding-left: 32px;
  padding-right: 32px;
  background: #b72a2a;
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #554848;

  @media (max-width: 800px) {
    padding-top: 32px;
    padding-bottom: 32px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: auto;
    min-height: auto;
  }
`;

const Aside = styled.aside`
  min-width: 210px;
  max-width: 210px;
  background: #b72a2a;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #554848;
`;

const Nav = styled.nav``;

const RightNav = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    border-left: 1px solid #554848;
    padding-left: 32px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: ${props => (props.vertical ? `column` : `row`)};
  padding-left: ${props => (props.indented ? `16px` : `0`)};

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;

    &.stay-vertical {
      flex-direction: row;

      & li {
        margin-right: 16px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;

const ListItem = styled.li`
  margin-right: 16px;
  /* padding-top: 8px; */
  list-style: none;
  margin-top: ${({ mt }) => (mt ? `8px` : 0)};
  padding-top: ${({ pt }) => (pt ? `16px` : 0)};

  &.active {
    text-decoration: underline;
    list-style: disc;
  }

  @media (max-width: 800px) {
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 8px;
    /* margin-top: 8px;
    margin-bottom: 8px; */
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

const AsideHeader = styled.div`
  /* background: #b72a2a; */
  min-height: 80px;
  padding: 0 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #554848;
`;
const AsideFooter = styled.div`
  min-height: 80px;
  padding: 0 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #554848;
`;

const AsideLogo = styled.img`
  padding: 0;
  margin: 0;
  width: 100%;
  display: block;
`;

const AsideContent = styled.div`
  padding: 32px;
  height: 100%;
  overflow: auto;
`;

const AsideDescription = styled.p`
  padding-bottom: 32px;
`;

const ListHeader = styled.h3`
  font-size: 16px;
  padding-bottom: 24px;
`;

const Header = () => (
  <HeaderWrapper>
    <Nav>
      <List>
        <ListItem>
          <ListLink exact to="/" activeClassName="is-active">
            Gallery
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
    <RightNav>
      <Nav>
        <List>
          <ListItem>
            <ListLink exact to="/login" activeClassName="is-active">
              Login
            </ListLink>
          </ListItem>
          <ListItem>
            <ListLink exact to="/register" activeClassName="is-active">
              Register
            </ListLink>
          </ListItem>
        </List>
      </Nav>
    </RightNav>
  </HeaderWrapper>
);

const Sidebar = () => (
  <Aside>
    <AsideHeader>
      <ListLink to="/">
        <AsideLogo src={logo_src} alt="Schroeder's Art Logo" />
      </ListLink>
    </AsideHeader>
    <AsideContent>
      <AsideDescription>
        The world's greatest personal collection of classic, era specific
        reprints.
      </AsideDescription>
      <ListHeader>Categories</ListHeader>
      <Nav>
        <List vertical indented>
          <ListItem className="active">All</ListItem>
          <ListItem mt>Bedroom</ListItem>
          <ListItem mt>Bathroom</ListItem>
          <ListItem mt>Den</ListItem>
          <ListItem mt>Kitchen</ListItem>
          <ListItem mt>Study</ListItem>
          <ListItem mt>Utility</ListItem>
          <ListItem mt pt>
            Digital
          </ListItem>
          <ListItem mt>Framed</ListItem>
        </List>
      </Nav>
    </AsideContent>
    <AsideFooter>
      <Nav>
        <List className="stay-vertical">
          <ListItem>
            <ListLink exact to="/privacy" activeClassName="is-active">
              Privacy
            </ListLink>
          </ListItem>
          <ListItem>
            <ListLink exact to="/help" activeClassName="is-active">
              Help
            </ListLink>
          </ListItem>
        </List>
      </Nav>
    </AsideFooter>
  </Aside>
);

const FooterWrapper = styled.div`
  height: 120px;
`;

const ScrollWrapper = styled.div`
  overflow-y: auto;
`;

// const Footer = () => (
//   <FooterWrapper>

//   </FooterWrapper>
// );

const Layout = ({ children }) => (
  <Wrapper>
    <Sidebar />
    <ContentWrapper>
      <Header />
      <ScrollWrapper>
        <Content>{children}</Content>
      </ScrollWrapper>
    </ContentWrapper>
  </Wrapper>
);

export default Layout;
