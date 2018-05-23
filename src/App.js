import React, { Component } from 'react';
import logo from './logo.svg';
import Shopcart from './components/shopcart.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Shopcart/>
      </div>
    );
  }
}

export default App;
