import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Contact from "./Contact";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="info">
          <h1>WELCOME</h1>
           </div>
        <ul className="header">
          <li><NavLink to="/home">HOME</NavLink></li>
          <li><NavLink to="/product">PRODUCTS</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
        </ul>
        <div className="content">
          <Route path="/home" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

export default Main;