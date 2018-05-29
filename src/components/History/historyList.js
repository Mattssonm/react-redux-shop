import React from 'react';
import { connect } from 'react-redux';

import '../../css/history.css';

const HistoryList = props => {
    console.log(props.HistoryList)
    return (
    <tr>
      <td>{props.HistoryList}</td>
    </tr>
  )
}

export default HistoryList;
