import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as AdminActionCreators from '../../actions/admin.js'
import * as AnimateHeightCreators from '../../actions/animateHeight.js'
import AnimateHeight from 'react-animate-height';
import AdminProductList from './AdminProductList.js';
import AdminInput from './AdminInput.js'
import '../../css/admin.css';
import {actionHistoryAdd} from '../../actions/actions.js';


class Admin extends Component {
  state = {
    name: "",
    picture: "",
    description: "",
    price: 0,
    amount: 0,
    updateId: 0,
    updateProp: "name",
    updateValue: ""
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

  handleUpdateClick = event => {
    this.props.dispatch(AdminActionCreators.updateProduct({
      index: this.state.updateId,
      property: this.state.updateProp,
      value: this.state.updateValue
    }));
    this.props.dispatch(actionHistoryAdd(AdminActionCreators.updateProduct({
      index: this.state.updateId,
      property: this.state.updateProp,
      value: this.state.updateValue
    }).type));
  }

  handleSelect = event => {
    this.setState({
      [event.target.name]: event.target.selectedOptions[0].value
    })
  }

  handleChangeForm = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  togglePanel = () => {
    //if height is 0 dispatch 'auto'
    if (this.props.compVisible.adminHeight === 0) {
      this.props.dispatch(AnimateHeightCreators.setHeight({
        property: "adminHeight",
        value: 'auto'
      }));
      // else dispatch 0
    } else {
      this.props.dispatch(AnimateHeightCreators.setHeight({
        property: "adminHeight",
        value: 0
      }));
    }
  };

  render() {
    const inputs = ["name", "picture", "description", "price", "amount"];

    const productList = this.props.products.map ((product, index) => {
      return (
        <AdminProductList
          key={"ProductList" + index + product.name}
          index={index}
          product={product}
          handleRemoveClick={this.handleRemoveClick}
        />
      )
    });

    const inputList = inputs.map((input, index) => {
      return (
        <AdminInput
          key={"AdminInput" + index + input}
          inputName={input}
          handleChangeForm={this.handleChangeForm}
        />
      )
    });

    //Create the idSelect by mapping products
    const idSelect = this.props.products.map((product, index) => {
      return (
        <option
          key={"idSelect" + index + product.name}
          value={index}>
          {index}
        </option>
      )
    })

    //Create the propSelect by mapping inputs
    const propSelect = inputs.map((option, index) => {
      return (
        <option
          key={"propSelect" + index + option}
          value={option}>
          {option}
        </option>
      )
    })

    return (
      <div>
        <AnimateHeight duration={350} height={this.props.compVisible.adminHeight} >
          <div id="compDiv">
            <h1>Admin Panel</h1>

            <h3>Products</h3>
            <table>
              <thead>
                <tr>
                  <th>#</th>
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
            <input
              className="btn"
              type="submit"
              value="Add Product"
              onClick={this.handleAddClick}
            />

            <h3>Update Product</h3>
            <select
              onChange={this.handleSelect}
              name="updateId">
              {idSelect}
            </select>
            <select
              onChange={this.handleSelect}
              name="updateProp">
              {propSelect}
            </select>
            <input
              onChange={this.handleChangeForm}
              name="updateValue"
              placeholder="New Value"
            />
            <input
              className="btn"
              type="submit"
              value="Update Product"
              onClick={this.handleUpdateClick}
            />

          </div>
        </AnimateHeight>
        <button className="panelToggle btn" onClick={ this.togglePanel }>
          { this.props.compVisible.adminHeight === 0 ? 'Admin' : 'Close' }
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    compVisible: state.compVisible
  }
};

export default connect(mapStateToProps)(Admin) ;
