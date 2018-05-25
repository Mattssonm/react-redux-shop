import * as AdminActionTypes from '../actiontypes/admin.js';

//import initialState
const initialState = 0;

export default function Admin(state = initialState, action) {
  switch(action.type) {
    case AdminActionTypes.ADD_PRODUCT:
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
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case AdminActionTypes.UPDATE_PRODUCT:
      return state.map( product => product === action.oldItem ? action.newItem : product );

    default:
      return state;
  }
}
