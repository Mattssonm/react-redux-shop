import {CART_ADD, CART_REMOVE, SHOP_ADDTOCART, CART_UNDO} from '../actions/actionConstants.js';
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
      return {
        ...state, cartList : {
        past: [...state.cartList.past, {
          ...state.cartList.present[action.target.index],
          amount: oldAmount
        }],
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
      const previousPresent = state.cartList.present;
      console.log(previousPresent)
      return {
        ...state, cartList : {
        past: previousPresent,
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
    case CART_UNDO:
    if (state.cartList.past.length <= 0){
      return {
        ...state
      }
    }

    const previous = state.cartList.past.slice(0, state.cartList.past.length - 1);
    return {
      ...state, cartList : {
      past: previous,
      present: [
        ...state.cartList.past,
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
