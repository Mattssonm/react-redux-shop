import * as AdminActionTypes from '../actiontypes/admin.js';

export const addProduct = obj => {
    return {
      type: AdminActionTypes.ADD_PRODUCT,
      name: obj.name,
      picture: obj.picture,
      description: obj.description,
      price: obj.price,
      amount: obj.amount
    }
}

export const removeProduct = index => {
  return {
    type: AdminActionTypes.REMOVE_PRODUCT,
    index: index

  }
}

export const updateProduct = obj => {
  return {
    type: AdminActionTypes.UPDATE_PRODUCT,
    index: obj.index,
    property: obj.property,
    value: obj.value
  }
}
