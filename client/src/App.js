import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import WebFont from "webfontloader";
import Layout from "./components/layout/Layout";
import Gallery from "./components/Art";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/404";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Privacy from "./components/Privacy";
import Help from "./components/Help";
import Art from "./components/Art";

import ScrollToTop from "./components/layout/ScrollToTop";

WebFont.load({
  typekit: {
    id: "germania-one;alegreya",
    api: "//use.edgefonts.net/"
  }
});

const GlobalStyling = createGlobalStyle`
 
 *, *:after, *:before {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    height: 100%;
    width: 100%;

  }

#root {
  height: 100%;
  width: 100%;
}

  
  body {
  width: 100%;
  height: 100%;
    margin: 0;
    padding: 0;
    font-family: alegreya, serif;
    font-size: 1.8rem;
    color: #1b1b1b;
    font-weight: 700;

  }

  h1, h2, h3, h4 {
    margin: 0;
    font-family: germania-one, sans-serif;
  }

  p {
    margin: 0;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

li {
  font-family: germania-one, sans-serif;
}

a {
  color: inherit;
}

button {
  font-family: germania-one, sans-serif;
   font-size: 1.6rem;
  outline: 0;
}

`;

function App() {
  return (
    <Router>
      <GlobalStyling />
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route exact path="/" component={Art} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/contact" component={Help} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
