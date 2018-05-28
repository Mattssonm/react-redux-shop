import {CART_ADD, CART_REMOVE, SHOP_ADDTOCART, CART_UNDO} from '../actions/actionConstants.js';
import {combineReducers} from 'redux';
import admin from './admin.js'

let cartReducer = (state={}, action) => {
  switch (action.type){
    case CART_ADD:
      const oldAmount = state.present[action.target.index].amount;
      if(state.present[action.target.index].amount < state.present[action.target.index].maxAmount){
        state.present[action.target.index].amount += 1
      }
      else {
        return {
          ...state
        }
      }
      return {
        past: [...state.past, {
          ...state.present[action.target.index],
          amount: oldAmount
        }],
        present: [
          ...state.present,
        ],
        future: [...state.future],
      }
    case CART_REMOVE:
      return {
        past: [...state.past, state.present.splice(action.target.index, 1)],
        present: [
          ...state.present,
        ],
        future: [...state.future],
      }
    case SHOP_ADDTOCART: //returns the entire previous state and adds the new object
      const previousPresent = state.present;
      return {
        past: previousPresent,
        present: [
          ...state.present,
          {
            name: action.target.name,
            picture: action.target.picture,
            description: action.target.description,
            price: Number(action.target.price),
            amount: 1,
            maxAmount: action.target.amount,
          }
        ],
        future: [...state.future],
      }
    case CART_UNDO:
    if (state.past.length <= 0){
      return {
        ...state
      }
    }

    const previous = state.past.slice(0, state.past.length - 1);
    return {
      past: previous,
      present: [
        ...state.past,
      ],
      future: [...state.future],
    }
    default:
      return {...state}
  }
}

const rootReducer = combineReducers({
  cartList: cartReducer,
  products: admin,
})

export default rootReducer;
