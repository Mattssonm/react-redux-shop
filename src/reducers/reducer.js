const rootReducer = (state={ data: '' }, action) => {
    switch( action.type ) {
        case 'CHANGE_DATA':
            return {...state, data: action.newData};
        default: return {...state};
    }
}


export default rootReducer;
