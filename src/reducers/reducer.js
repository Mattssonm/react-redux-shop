import {CART_ADD, CART_REMOVE, SHOP_ADDTOCART} from '../actions/actionConstants.js';
import {combineReducers} from 'redux';

let cartReducer = (state={}, action) => {
  switch (action.type){
    case CART_ADD:
      const oldAmount = state.cartList.present[action.target.index].amount;
      if(state.cartList.present[action.target.index].amount < state.cartList.present[action.target.index].maxAmount){
        state.cartList.present[action.target.index].amount += 1
      }
      else {
        return {
          ...state
        }
      }
      console.log(oldAmount);
      return {
        ...state, cartList : {
        past: [...state.cartList.past, ],
        present: [
          ...state.cartList.present,
        ],
        future: [...state.cartList.future],
        }
      }
    case CART_REMOVE:
      return {
        ...state, cartList : {
        past: [...state.cartList.past, state.cartList.present.splice(action.target.index, 1)],
        present: [
          ...state.cartList.present,
        ],
        future: [...state.cartList.future],
        }
      }
    case SHOP_ADDTOCART: //returns the entire previous state and adds the new object
      return {
        ...state, cartList : {
        past: [...state.cartList.past],
        present: [
          ...state.cartList.present,
          {
            name: action.target.name,
            picture: action.target.picture,
            description: action.target.description,
            price: Number(action.target.price),
            amount: 1,
            maxAmount: action.target.amount,
          }
        ],
        future: [...state.cartList.future],
        }
      }
    default:
      return {...state}
  }
}

const rootReducer = cartReducer;


export default rootReducer;
