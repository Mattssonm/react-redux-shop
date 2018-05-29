import React, {Component} from 'react';
import ShopcartItem from './shopcartItem.js';
import './shopcart.css'
import {actionCartUndo} from '../actions/actions.js';
import {connect} from 'react-redux';
import {actionHistoryAdd} from '../actions/actions.js';

class Shopcart extends Component {
  handleUndoClick = event => {
    this.props.dispatch(actionCartUndo())
    this.props.dispatch(actionHistoryAdd(actionCartUndo().type))

  }
  render(){
    return (
      <div className="cartContainer">
        <h3>Shopping Cart</h3>
        <ShopcartItem/>
        <button onClick={event => { this.handleUndoClick() } }> Undo </button>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Shopcart);
