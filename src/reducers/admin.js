import * as AdminActionTypes from '../actiontypes/admin.js';

export default function admin(state = {}, action) {
  switch(action.type) {
    case AdminActionTypes.ADD_PRODUCT:
      console.log("Admin reducer ADD_PRODUCT")
      return [
        ...state,
        {
          name: action.name,
          picture: action.picture,
          description: action.description,
          price: action.price,
          amount: action.amount
        }
      ];

    case AdminActionTypes.REMOVE_PRODUCT:
    console.log("Admin reducer REMOVE_PRODUCT")
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case AdminActionTypes.UPDATE_PRODUCT:
    console.log("Admin reducer UPDATE_PRODUCT")
      return state.map( product => product === action.oldItem ? action.newItem : product );

    default:
      return state;
  }
}
