import React, {Component} from 'react';
import ShopcartItem from './shopcartItem.js';
import './shopcart.css'

class Shopcart extends Component {
  render(){
    return (
      <div className="cartContainer">
        <button> Undo </button>
      </div>
    )
  }
}

export default Shopcart;
