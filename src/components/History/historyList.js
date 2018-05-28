import React from 'react';
import { connect } from 'react-redux';

import '../../css/history.css';

const HistoryList = props => {
    
    const showHistory = () => {
        if(props.cartList === undefined){
            return <p>No Actions Made</p>
        } else {
            return props.cartList.present
        }
    }
  return (
    <tr>
      <td>{showHistory()}</td>
    </tr>
  )
}

export default HistoryList;
