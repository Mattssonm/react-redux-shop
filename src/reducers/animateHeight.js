import * as AnimateHeightActionTypes from '../actiontypes/animateHeight.js';

export default function animateHeight(state = {}, action) {
  switch(action.type) {
    case AnimateHeightActionTypes.SET_HEIGHT:
      console.log("AnimateHeight reducer SET_HEIGHT")
      return {
        ...state,
        [action.property]: action.value
      }

    default:
      return state;
  }
}
