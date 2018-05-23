import * AdminActionTypes from '../actiontypes/admin.js';

export const addProduct = (name, picture, description, price, amount) => {
    return {
      type: AdminActionTypes.ADD_PRODUCT,
      name: name,
      picture: picture,
      description: description,
      price: price,
      amount: amount
    }
}

export const removeProduct = index => {
  return {
    type: AdminActionTypes.REMOVE_PRODUCT,
    index: index

  }
}

export const updateProduct = () => {
  return {
    type: AdminActionTypes.UPDATE_PRODUCT
    //Add more props here

  }
}
