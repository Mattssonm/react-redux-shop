import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnimateHeight from 'react-animate-height';
import * as AnimateHeightCreators from '../../actions/animateHeight.js'
import '../../css/history.css';
import {actionHistoryAdd} from '../../actions/actions.js';


class History extends Component {

  togglePanel = () => {
    //if height is 0 dispatch 'auto'
    if (this.props.compVisible.historyHeight === 0) {
      this.props.dispatch(AnimateHeightCreators.setHeight({
        property: "historyHeight",
        value: 'auto'
      }));
      this.props.dispatch(actionHistoryAdd(AnimateHeightCreators.setHeight({
        property: "adminHeight",
        value: 'auto'
      }).type));
      // else dispatch 0
    } else {
      this.props.dispatch(AnimateHeightCreators.setHeight({
        property: "historyHeight",
        value: 0
      }));
      this.props.dispatch(actionHistoryAdd(AnimateHeightCreators.setHeight({
        property: "adminHeight",
        value: 0
      }).type));
    }
  };

  render() {
    return (
      <div>
        <AnimateHeight duration={350} height={this.props.compVisible.historyHeight} >
          <div id="compDiv">
            <h1>History Panel</h1>
            <h3 className="actionHeadline">Actions</h3>
            <div className="actionTable">
              <ol>
              {this.props.history === undefined ? <p>No Action Made</p> : this.props.history.map((product, index) => {
                return <li key={index}>{product}</li>
              })}
              </ol>
            </div>
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
    history: state.historyList,
    compVisible: state.compVisible
  }
};

export default connect(mapStateToProps)(History) ;
