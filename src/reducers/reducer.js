import {CART_ADD, CART_REMOVE, SHOP_ADDTOCART} from '../actions/actionConstants.js';
import {combineReducers} from 'redux';

let cartReducer = (state={}, action) => {
  switch (action.type){
    case CART_ADD:
      return {}
    case CART_REMOVE:
      return {}
    case SHOP_ADDTOCART:
      return{}
    default:
      return {...state}
  }
}

const rootReducer = cartReducer;


export default rootReducer;
