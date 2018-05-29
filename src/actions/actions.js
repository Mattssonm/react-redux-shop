import {CART_REMOVE, CART_ADD, CART_UNDO, SHOP_ADDTOCART, ADMIN_ADDNEW, ADMIN_EDITPRODUCT, ADMIN_REMOVEPRODUCT, HISTORY_ADD} from './actionConstants.js';

let actionCartRemove = (target) => {
  return {
    type: CART_REMOVE,
    target: target,
  };
}
let actionCartAdd = (target) => {
  return {
    type: CART_ADD,
    target: target,
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
let actionHistoryAdd = item =>{
  return{
    type: HISTORY_ADD,
    item: item
  }
}

export {actionCartRemove, actionCartAdd, actionCartUndo, actionShopAddtocart, actionAdminAddnew, actionAdminEditproduct, actionAdminRemoveproduct, actionHistoryAdd}
