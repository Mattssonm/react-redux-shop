import React, { Component } from 'react';
import Admin from './components/Admin.js';
import './css/app.css';
import Shopcart from './components/shopcart.js'


class App extends Component {

  render() {
    return (
      <div className="app">
        <Shopcart/>
        <Admin />
        <h1>Superpower Sandwhiches!</h1>
      </div>
    );
  }
}

export default App;
