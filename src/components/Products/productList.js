import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../css/product.css'

class ProductList extends Component {
    
    showAllItems = this.props.products.map(product => (
        <div key={product.name + product.description}>
          <div className="card">
            <div className="card-header">{product.name}</div>
                <div className="card-main">
                <img src={product.picture} alt="Avatar"/>
                <div className="main-description">{product.description}</div>
                <div>{product.price} &#36;</div>
                {product.amount === 0 || product.amount === '0' ? <div><br /><div>Out of Stock</div></div> : <div><button>Add To Cart</button>
                <div>In Stock: {product.amount}</div></div> }
            </div>
            </div>
        </div>
      ))
    
    render() {
      return (
        <div className="product-list-container">            
            {this.showAllItems}
        </div>
      )
    }
  }
  
  let mapStateToProps = state => {
    return {
      products: state.products,
    }
  }

  export default connect(mapStateToProps)(ProductList);

  