import * as AdminActionTypes from '../actiontypes/admin.js';

export default function admin(state = {}, action) {
  switch(action.type) {
    case AdminActionTypes.ADD_PRODUCT:
      //console.log("Admin reducer ADD_PRODUCT");
      return {
        past: [...state.past, state.present],
        present: [...state.present,
        {
          name: action.name,
          picture: action.picture,
          description: action.description,
          price: Number(action.price),
          amount: Number(action.amount),
        }]
      };

      case AdminActionTypes.REMOVE_PRODUCT:
        //console.log("Admin reducer REMOVE_PRODUCT");
        const convertedIndex = parseInt(action.index, 10);
        //console.log("The Past", [...state.past], "The Past with the latest Present", [...state.past, state.present]);
        return {
          past: [...state.past, state.present],
          present: [
            ...state.present.slice(0, convertedIndex),
            ...state.present.slice(convertedIndex + 1)
          ]
        };

    case AdminActionTypes.UPDATE_PRODUCT:
      return {
        past: [...state.past, state.present],
        present: state.present.map(product => {
          if (product === state.present[action.index]){
            let newObject = {};
            Object.assign(newObject, state.present[action.index])
            newObject[action.property] = action.value;
            return {
              ...newObject
            }
          }
          else {
            return product
          }
        }),
      };

    case AdminActionTypes.UNDO_PRODUCT:
      //console.log("Admin reducer UNDO_PRODUCT");
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
