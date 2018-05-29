import * as animateHeightActionTypes from '../actiontypes/animateHeight.js';

export const setHeight = obj => {
    return {
      type: animateHeightActionTypes.SET_HEIGHT,
      value: obj.value,
      property: obj.property
    }
}
