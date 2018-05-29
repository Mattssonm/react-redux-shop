import * as AdminActionTypes from '../actiontypes/admin.js';

export default function admin(state = {}, action) {
  switch(action.type) {
    case AdminActionTypes.ADD_PRODUCT:
      console.log("Admin reducer ADD_PRODUCT")
      return {
        past: [...state.past],
        present: [...state.present,
        {
          name: action.name,
          picture: action.picture,
          description: action.description,
          price: action.price,
          amount: action.amount
        }]
      };

      case AdminActionTypes.REMOVE_PRODUCT:
        console.log("Admin reducer REMOVE_PRODUCT")
        const convertedIndex = parseInt(action.index);
        return {
          past: [...state.past],
          present: [
            ...state.present.slice(0, convertedIndex),
            ...state.present.slice(convertedIndex + 1)
          ]
        };

    case AdminActionTypes.UPDATE_PRODUCT:
      console.log("Admin reducer UPDATE_PRODUCT")
      const newState = [...state.present]; //clone the array
      newState[action.index][action.property] = action.value;
      return {
        past: [...state.past],
        present: newState
      }
    default:
      return state;
  }
}
