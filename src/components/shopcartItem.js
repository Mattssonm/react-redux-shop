import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCartAdd, actionCartRemove} from '../actions/actions.js'



class ShopcartItem extends Component {
  render(){
    return(
      <div className="itemDiv">
          {}
          Total price: {}
      </div>
    )
  } //Original list mapped to html elements
  // end of render
}

let mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(ShopcartItem);
