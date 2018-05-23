import React, {Component} from 'react';
import ProductList from './productList';
import '../../css/product.css';

class Product extends Component {
    
  
    render() {
      return (
        <div className="product-list-container">            
            <ProductList />
        </div>
      )
    }
  }
  
  export default Product;

  