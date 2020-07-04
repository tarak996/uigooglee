import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import  './Overriding.css';
import shopimage from './shopimage.jpg';
import homeimage from './homeimage.png';
class Main extends Component {
  render() {
    return (
      <HashRouter>

        <div className="info">
          <h1>SHOPING CART</h1>
          </div>
          <div className="shopimage" >
          <img src={shopimage} className="shopimage" alt="logo" />
          </div>
          <div className="homeimage" >
           
            <li><NavLink to="homeimage"> <img src={homeimage} className="homeimage" alt="logo" />  </NavLink></li>
          </div>
          
          
          <div>
          <ul className="header">
          <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/home" component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/contact" component={Contact}/>
          </div>
          </div>
          </HashRouter>
     

    );
  }
}
 
export default Main;