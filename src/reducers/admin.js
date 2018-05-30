import * as AdminActionTypes from '../actiontypes/admin.js';

export default function admin(state = {}, action) {
  switch(action.type) {
    case AdminActionTypes.ADD_PRODUCT:
      console.log("Admin reducer ADD_PRODUCT");
      return {
        past: [...state.past, state.present],
        present: [...state.present,
          {
            name: action.name,
            picture: action.picture,
            description: action.description,
            price: Number(action.price),
            amount: Number(action.amount),
          }
        ]
      }

      case AdminActionTypes.REMOVE_PRODUCT:
        console.log("Admin reducer REMOVE_PRODUCT")
        const convertedIndex = parseInt(action.index, 10);
        return [
          ...state.slice(0, convertedIndex),
          ...state.slice(convertedIndex + 1)
        ];


    case AdminActionTypes.UPDATE_PRODUCT:
      console.log("Admin reducer UPDATE_PRODUCT");
      const newState = JSON.parse(JSON.stringify(state.present)); //clone the array

      newState[action.index][action.property] = action.value;
      return {
        past: [...state.past, state.present],
        present: newState
      };

    case AdminActionTypes.UNDO_PRODUCT:
      console.log("Admin reducer UNDO_PRODUCT");
      let previousState = state.past[state.past.length -1];
      let newPast = state.past.slice(0, state.past.length -1);
      if (state.past.length <= 0) {
        return {
          ...state
        }
      } else {
        return {
          past: newPast,
          present: previousState,
        }
      }

    default:
      return {...state}
  }
}
