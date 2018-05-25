import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCartAdd, actionCartRemove} from '../actions/actions.js'



class ShopcartItem extends Component {
  render(){
    let shoppingCartList = this.props.cartList.present.map(product => (
      <div key={product.name + product.description}>
        <div className="card">
          <div className="card-header">{product.name}</div>
              <div className="card-main">
              <img src={product.picture} alt="Avatar"/>
              <div className="main-description">{product.description}</div>
              <div>{product.price}</div>
          </div>
        </div>
      </div>
    ))
    let totalCartPrice = 0;
    this.props.cartList.present.forEach(function(product) {
      totalCartPrice += product.price;
    }) //loops through and adds all prices together
    return(
      <div className="itemDiv">
          {shoppingCartList}
          Total price: {totalCartPrice}
      </div>
    )
  } //Original list mapped to html elements // end of render
}

let mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(ShopcartItem);
