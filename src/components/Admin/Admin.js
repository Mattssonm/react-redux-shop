import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AdminActionCreators from '../../actions/admin.js'
import AnimateHeight from 'react-animate-height';
import AdminProductList from './AdminProductList.js';
import AdminInput from './AdminInput.js'
import '../../css/admin.css';
import {actionHistoryAdd} from '../../actions/actions.js';


class Admin extends Component {
  state = {
    height: 0,
    name: "",
    picture: "",
    description: "",
    price: 0,
    amount: 0

  };

  handleAddClick = event => {
    this.props.dispatch(AdminActionCreators.addProduct({
      name: this.state.name,
      picture: this.state.picture,
      description: this.state.description,
      price: this.state.price,
      amount: this.state.amount
    }));
    this.props.dispatch(actionHistoryAdd(AdminActionCreators.addProduct({
      name: this.state.name,
      picture: this.state.picture,
      description: this.state.description,
      price: this.state.price,
      amount: this.state.amount
    }).type));
    
  }

  handleRemoveClick = event => {
    this.props.dispatch(AdminActionCreators.removeProduct(event.target.dataset.id))
    this.props.dispatch(actionHistoryAdd(AdminActionCreators.removeProduct(event.target.dataset.id).type));
  }

  handleChangeForm = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  togglePanel = () => {
    this.setState({
      height: this.state.height === 0 ? 'auto' : 0,
    });
  };

  render() {

    const productList = this.props.products.map ((product, index) => {
      return <AdminProductList index={index} product={product} handleRemoveClick={this.handleRemoveClick} />;
    });

    const inputs = ["name", "picture", "description", "price", "amount"];
    const inputList = inputs.map((input, index) => {
      return <AdminInput
          inputName={input}
          handleChangeForm={this.handleChangeForm}
        />
    })

    return (
      <div>
        <AnimateHeight duration={350} height={this.state.height} >
          <div id="compDiv">
            <h1>Admin Panel</h1>
            <h3>Products</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Picture</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {productList}
              </tbody>
            </table>

            <h3>Create Product</h3>
            {inputList}
            <input className="btn" type="submit" value="Add Product" onClick={this.handleAddClick} />
          </div>
        </AnimateHeight>
        <button className="panelToggle btn" onClick={ this.togglePanel }>
          { this.state.height === 0 ? 'Admin' : 'Close' }
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

export default connect(mapStateToProps)(Admin) ;
