import React, {Component} from 'react';

class ShopcartItem extends Component {
  render(){
    return(
      <div className="itemDiv">
        <div className="nameDiv">
          Name
        </div>
        <div className="imgDiv">
          <img alt="Image here"/>
        </div>
        <div className="descriptionDiv">
          Description
        </div>
        <div className="amountDiv">
          Amount
        </div>
        <div className="priceDiv">
          Price
        </div>
        <button className="addBtn"> Add another </button>
        <button className="removeBtn"> Remove </button>
      </div>
    )
  }
}

export default ShopcartItem;
