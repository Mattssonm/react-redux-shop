import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnimateHeight from 'react-animate-height';
import '../../css/history.css';


class History extends Component {
  state = {
    height: 0,
    name: "",
    picture: "",
    description: "",
    price: 0,
    amount: 0

  };

  togglePanel = () => {
    this.setState({
      height: this.state.height === 0 ? 'auto' : 0,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
          
        <AnimateHeight duration={350} height={this.state.height} >
          <div id="compDiv">
            <h1>History Panel</h1>
            <h3>Actions</h3>
            <table>
              <thead>
                <tr>
                                   
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
          </div>
        </AnimateHeight>
        <button className="panelToggleHistory historyBtn" onClick={ this.togglePanel }>
          { this.state.height === 0 ? 'History' : 'Close' }
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
};

export default connect(mapStateToProps)(History) ;
