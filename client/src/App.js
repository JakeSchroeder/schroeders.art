import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Layout from "./components/Layout";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/404";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const GlobalStyling = createGlobalStyle`
  *, *:after, *:before {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, p {
    margin: 0;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

`;

function App() {
  return (
    <Router>
      <>
        <GlobalStyling />
        <Layout>
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </>
    </Router>
  );
}

export default App;
