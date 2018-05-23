import {CART_ADD, CART_REMOVE} from '../actions/actionConstants.js';

let cartReducer = (state, action) => {
  switch (action.type){
    case CART_ADD:
      return {}
    case CART_REMOVE:
      return {}
  }
}

const rootReducer = (state={ data: '' }, action) => {
    switch( action.type ) {
        case 'CHANGE_DATA':
            return {...state, data: action.newData};
        default: return {...state};
    }
}


export default rootReducer;
