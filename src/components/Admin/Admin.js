import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as AdminActionCreators from '../../actions/admin.js'
import AnimateHeight from 'react-animate-height';
import AdminProductList from './AdminProductList.js';
import AdminInput from './AdminInput.js'
import '../../css/admin.css';


class Admin extends Component {
  state = {
    height: 0,
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
  }

  handleRemoveClick = event => {
    this.props.dispatch(AdminActionCreators.removeProduct(event.target.dataset.id))
  }

  handleUpdateClick = event => {
    this.props.dispatch(AdminActionCreators.updateProduct({
      index: this.state.updateId,
      property: this.state.updateProp,
      value: this.state.updateValue
    }));
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
    this.setState({
      height: this.state.height === 0 ? 'auto' : 0,
    });
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
        <AnimateHeight duration={350} height={this.state.height} >
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
