import React, {Component} from 'react';
import {connect} from 'react-redux';



class ShopcartItem extends Component {
  render(){
    const superpowerProducts = this.props.products.map(product => (
      <div key={product.name + product.description}>
        <div className="nameDiv">
          {product.name}
        </div>
        <div className="imgDiv">
          <img src={product.picture} alt="Image here"/>
        </div>
        <div className="descriptionDiv">
          {product.description}
        </div>
        <div className="amountDiv">
          {product.amount}
        </div>
        <div className="priceDiv">
          {product.price}
        </div>
        <button className="addBtn"> Add another </button>
        <button className="removeBtn"> Remove </button>
      </div>
    ))
    return(
      <div className="itemDiv">
          {superpowerProducts}
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    products: state.products.present,
  }
}

export default connect(mapStateToProps)(ShopcartItem);
