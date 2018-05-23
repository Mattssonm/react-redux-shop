import React, {Component} from 'react';
import ShopcartItem from './shopcartItem.js';
import './shopcart.css'

class Shopcart extends Component {
  render(){
    return (
      <div className="cartContainer">
        <ShopcartItem/>
        <ShopcartItem/>
        <ShopcartItem/>
        <button> Undo </button>
      </div>
    )
  }
}

export default Shopcart;
