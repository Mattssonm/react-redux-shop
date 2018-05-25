import {CART_REMOVE, CART_ADD, CART_UNDO, SHOP_ADDTOCART, ADMIN_ADDNEW, ADMIN_EDITPRODUCT, ADMIN_REMOVEPRODUCT} from './actionConstants.js';

let actionCartRemove = () => {
  return {
    type: CART_REMOVE
  };
}
let actionCartAdd = (event) => {
  return {
    type: CART_ADD,
    target: event.target,
  };
}
let actionCartUndo = () => {
  return {
    type: CART_UNDO
  };
}
let actionShopAddtocart = (target) => {
  return {
    type: SHOP_ADDTOCART,
    target: target,
  };
}
let actionAdminAddnew = () => {
  return {
    type: ADMIN_ADDNEW
  };
}
let actionAdminEditproduct = () => {
  return {
    type: ADMIN_EDITPRODUCT
  };
}
let actionAdminRemoveproduct = () => {
  return {
    type: ADMIN_REMOVEPRODUCT
  };
}

export {actionCartRemove, actionCartAdd, actionCartUndo, actionShopAddtocart, actionAdminAddnew, actionAdminEditproduct, actionAdminRemoveproduct}
