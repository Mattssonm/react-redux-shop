import {CART_ADD, CART_REMOVE, SHOP_ADDTOCART, CART_UNDO} from '../actions/actionConstants.js';
import {combineReducers} from 'redux';
import admin from './admin.js'

let cartReducer = (state={}, action) => {
  console.log(state.past, state.present, state);
  switch (action.type){
    case CART_ADD:
      const oldAmount = state.present[action.target.index].amount;
      let newAmount=oldAmount;
      if(state.present[action.target.index].amount < state.present[action.target.index].maxAmount){
        newAmount++;
      }
      else {
        return state;
      }
      return {
        past: [...state.past, state.present],
        present: state.present.map( product => {
          if(product === state.present[action.target.index]){
            return {
              ...product,
              amount: newAmount
            }
          }
          return product;
        }),
        future: [...state.future],
      }
    case CART_REMOVE:
      const cutItem = state.present[action.target.index];
      return {
        past: [...state.past, state.present],
        present: [
          ...state.present.filter(product => product !== cutItem)
        ],
        future: [...state.future],
      }
    case SHOP_ADDTOCART: //returns the entire previous state and adds the new object
      const previousPresent = state.present;
      return {
        past: [...state.past, state.present],
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
    let previousState = state.past[state.past.length -1];
    let newPast = state.past.slice(0, state.past.length -1);
    if (state.past.length <= 0){
      return {
        ...state
      }
    }
    return {
      past: newPast,
      present: previousState,
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