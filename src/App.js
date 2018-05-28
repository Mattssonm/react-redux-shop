import React, { Component } from 'react';
import Admin from './components/Admin/Admin.js';
import History from './components/History/history.js'
import './css/app.css';
import Shopcart from './components/shopcart.js'
import Product from './components/Products/products.js';


class App extends Component {

  render() {
    return (
      <div className="app">
        <Shopcart/>
        <History />
        <Admin />
        <h1>Superpower Sandwhiches!</h1>
        <Product />
      </div>
    );
  }
}

export default App;
