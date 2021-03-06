import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../css/product.css'
import {actionShopAddtocart} from '../../actions/actions.js'
import {actionHistoryAdd} from '../../actions/actions.js';

class ProductList extends Component {

  handleAddClick = event => {
    this.props.dispatch(actionShopAddtocart(event.target.dataset));
    this.props.dispatch(actionHistoryAdd(actionShopAddtocart(event.target.dataset).type));
  }


    render() {
      let showAllItems = this.props.products.map((product, index )=> (
          <div key={index + product.name + product.description}>
            <div className="card">
              <div className="card-header">{product.name}</div>
                  <div className="card-main">
                    <img src={product.picture} alt="Avatar"/>
                    <div className="main-description">{product.description}</div>
                    <div>{product.price} &#36;</div>
                    {product.amount < 1 || product.amount === '0' ?
                        <div><br />
                          <div>Out of Stock</div>
                        </div>
                      :
                      <div>
                        <button data-name={product.name} data-description={product.description} data-picture={product.picture} data-amount={product.amount} data-price={product.price} onClick={event => {
                        this.props.dispatch(actionShopAddtocart(event.target.dataset));
                        this.props.dispatch(actionHistoryAdd(actionShopAddtocart(event.target.dataset).type));}}>Add To Cart</button>
                        <div>In Stock: {product.amount}</div>
                      </div>
                    }
              </div>
            </div>
          </div>
        )) // Dataset contains all element unformation required in the button. (Figure out a diffrenet solution?)

      return (
        <div className="product-list-container">
            {showAllItems}
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
