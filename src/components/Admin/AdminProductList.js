import React from 'react';

const AdminProductList = props => {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.product.name}</td>
      <td><img src={props.product.picture} alt=""/></td>
      <td>{props.product.description}</td>
      <td>{props.product.price}</td>
      <td>{props.product.amount}</td>
      <td
        className="removeBtn btn"
        onClick={props.handleRemoveClick}
        data-id={props.index}>
        Remove
      </td>
    </tr>
  )
}

export default AdminProductList ;
