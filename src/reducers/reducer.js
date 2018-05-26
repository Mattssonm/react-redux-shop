import {CART_ADD, CART_REMOVE, SHOP_ADDTOCART} from '../actions/actionConstants.js';
import {combineReducers} from 'redux';
import admin from './admin.js'

let cartReducer = (state={}, action) => {
  switch (action.type){
    case CART_ADD:
      return {}
    case CART_REMOVE:
      return {}
    case SHOP_ADDTOCART: //returns the entire previous state and adds the new object
      return { ...state, cartList : {
        past: [...state.cartList.past],
        present: [
          ...state.cartList.present,
          {
            name: action.target.name,
            picture: action.target.picture,
            description: action.target.description,
            price: Number(action.target.price),
            amount: Number(action.target.amount),
          }
        ],
        future: [...state.cartList.future],
      } }
    default:
      return {...state}
  }
}

const rootReducer = combineReducers({
  cartList: cartReducer,
  products: admin,
})

export default rootReducer;
