import React, {Component} from 'react';
import ShopcartItem from './shopcartItem.js';
import './shopcart.css'
import {actionCartUndo} from '../actions/actions.js';
import {connect} from 'react-redux'

class Shopcart extends Component {
  handleUndoClick = event => {
    this.props.dispatch(actionCartUndo())
  }
  render(){
    return (
      <React.Fragment>
        <h3 className="cartTitle">Shopping Cart</h3>
        <div className="cartContainer">
          <ShopcartItem/>
          <button onClick={event => { this.handleUndoClick() } }> Undo </button>
        </div>
      </React.Fragment>
    )
  }
}

let mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Shopcart);
