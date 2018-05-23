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
                    <button>Add To Cart</button>
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
      products: state.products.present,
    }
  }

  export default connect(mapStateToProps)(ProductList);

  