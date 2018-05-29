import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCartAdd, actionCartRemove} from '../actions/actions.js';
import {actionHistoryAdd} from '../actions/actions.js';




class ShopcartItem extends Component {
  handleCartRemoveClick = event => {
    this.props.dispatch(actionCartRemove(event.target.dataset));
    this.props.dispatch(actionHistoryAdd(actionCartRemove(event.target.dataset).type));
  }
 handleCartAddClick = event => {
    this.props.dispatch(actionCartAdd(event.target.dataset));
    this.props.dispatch(actionHistoryAdd(actionCartAdd(event.target.dataset).type));
  }
  render(){
    let shoppingCartList = this.props.cartList.present.map(product => (
      <div key={product.name + product.description}>
        <div className="card">
          <div className="card-header">{product.name}</div>
              <div className="card-main">
              <img src={product.picture} alt="Avatar"/>
              <div className="main-description">{product.description}</div>
              <div>{product.price}</div>
              <div>{product.amount}</div>
              <button data-index={this.props.cartList.present.indexOf(product)} onClick={event => {
                this.handleCartAddClick(event)
              }}> Add another </button>
              <button data-index={this.props.cartList.present.indexOf(product)} onClick={event => {
                this.handleCartRemoveClick(event)
              }}> Remove </button>
          </div>
        </div>
      </div>
    ))
    let totalCartPrice = 0;
    this.props.cartList.present.forEach(function(product) {
      totalCartPrice += product.price * product.amount;
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
