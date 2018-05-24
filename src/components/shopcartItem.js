import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCartAdd, actionCartRemove} from '../actions/actions.js'



class ShopcartItem extends Component {
  render(){
    const superpowerProducts = this.props.products.map(product => (
      <div key={product.name + product.description}>
        <div className="nameDiv">
          {product.name}
        </div>
        <div className="imgDiv">
          <img src={product.picture} alt="Image here"/>
        </div>
        <div className="descriptionDiv">
          {product.description}
        </div>
        <div className="amountDiv">
          {product.amount}
        </div>
        <div className="priceDiv">
          {product.price}
        </div>
        <button className="addBtn"
        onClick = {event =>
          this.props.dispatch(actionCartAdd())} //Addbutton event
          > Add another </button>
        <button className="removeBtn"
        onClick = {event =>
          this.props.dispatch(actionCartAdd())} //removebutton event
        > Remove </button>
      </div>
    ))
    let totalPrice = 0;
    this.props.products.forEach (function(product){
      totalPrice += product.price;
    });
    return(
      <div className="itemDiv">
          {superpowerProducts}
          Total price: {totalPrice}
      </div>
    )
  } //Original list mapped to html elements 
  // end of render
}

let mapStateToProps = state => {
  return {
    products: state.products,
  }
}

export default connect(mapStateToProps)(ShopcartItem);
