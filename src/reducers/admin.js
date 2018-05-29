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
        const convertedIndex = parseInt(action.index, 10);
        return [
          ...state.slice(0, convertedIndex),
          ...state.slice(convertedIndex + 1)
        ];

    case AdminActionTypes.UPDATE_PRODUCT:
      console.log("Admin reducer UPDATE_PRODUCT")
      const newState = [...state]; //clone the array
      newState[action.index][action.property] = action.value;
      return newState;

    default:
      return state;
  }
}