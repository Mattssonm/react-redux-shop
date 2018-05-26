import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AdminActionCreators from '../../actions/admin.js'
import '../../css/admin.css';

const AdminProductList = props => {
  return (
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.picture}</td>
      <td>{props.product.description}</td>
      <td>{props.product.price}</td>
      <td>{props.product.amount}</td>
      <td className="removeBtn btn" onClick={props.handleRemoveClick} data-id={props.index}>Remove</td>
    </tr>
  )
}

export default AdminProductList ;
