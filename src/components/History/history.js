import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnimateHeight from 'react-animate-height';
import HistoryList from './historyList.js';
import * as AnimateHeightCreators from '../../actions/animateHeight.js'
import '../../css/history.css';


class History extends Component {
  state = {
    name: "",
    picture: "",
    description: "",
    price: 0,
    amount: 0

  };

  togglePanel = () => {
    //if height is 0 dispatch 'auto'
    if (this.props.compVisible.historyHeight === 0) {
      this.props.dispatch(AnimateHeightCreators.setHeight({
        property: "historyHeight",
        value: 'auto'
      }));
      // else dispatch 0
    } else {
      this.props.dispatch(AnimateHeightCreators.setHeight({
        property: "historyHeight",
        value: 0
      }));
    }
  };
  productList = () => {
    if(this.props.history === undefined){
      return <p> No Actions Made </p>
    } else {
    this.props.history.map ((product, index) => {
    return <tr key={index}>{product} </tr>
  });
}
}
  render() {
    return (
      <div>
        <AnimateHeight duration={350} height={this.props.compVisible.historyHeight} >
          <div id="compDiv">
            <h1>History Panel</h1>
            <h3 className="actionHeadline">Actions</h3>
            <table className="actionTable">
              <thead>
              </thead>
              <tbody>
              {this.props.history === undefined ? <p> No Action Made </p> : this.props.history.map((product, index) => {
                return <tr key={index}>{product}</tr>
              })}
              </tbody>
            </table>
          </div>
        </AnimateHeight>
        <button className="panelToggleHistory historyBtn" onClick={ this.togglePanel }>
          { this.props.compVisible.historyHeight === 0 ? 'History' : 'Close' }
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    history: state.historyList
    products: state.products,
    compVisible: state.compVisible
  }
};

export default connect(mapStateToProps)(History) ;
