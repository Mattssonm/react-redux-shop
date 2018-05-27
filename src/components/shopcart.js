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
      <div className="cartContainer">
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
