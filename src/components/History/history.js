import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnimateHeight from 'react-animate-height';
import HistoryList from './historyList.js';
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
    const productList = this.props.products.map ((product, index) => {
      return <HistoryList index={index} product={product} />;
    });
    return (
      <div>
          
        <AnimateHeight duration={350} height={this.state.height} >
          <div className="historyContainer">
            <h1>History Panel</h1>
            <h3 className="actionHeadline">Actions</h3>
            <table className="actionTable">
              <thead>
                
                
              </thead>
              <tbody>
              {productList}
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
