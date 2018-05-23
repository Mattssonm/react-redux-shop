import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import '../css/admin.css';


class Admin extends Component {
  state = {
    height: 0,
  };

  togglePanel = () => {
    this.setState({
      height: this.state.height === 0 ? 'auto' : 0,
    });
  };

  render() {
    return (
      <div>
        <AnimateHeight
          duration={ 350 }
          height={ this.state.height }
        >
          <div id="compDiv">
            <h1>Admin Panel</h1>
            <h3>Products</h3>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Superpower</th>
                  <th>Picture</th>
                  <th>Price</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>Bacon Sandwhich</td>
                  <td>This bacon sandwhich doesn't only taste amazing it also will make you strong like an ox!</td>
                  <td>Supers Strength</td>
                  <td>http:url</td>
                  <td>100$</td>
                  <td>42</td>
                  <td className="removeBtn btn">Remove</td>
                </tr>
                <tr>
                  <td>#2</td>
                  <td>Cheese Sandwhich</td>
                  <td>This cheese sandwhich doesn't only taste amazing it also will render you invisible!</td>
                  <td>Invisibility</td>
                  <td>http:url</td>
                  <td>75$</td>
                  <td>37</td>
                  <td className="removeBtn btn">Remove</td>
                </tr>
              </tbody>
            </table>

            <h3>Create Product</h3>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Description" />
            <input type="text" placeholder="Superpower" />
            <input type="text" placeholder="Picture" />
            <input type="number" placeholder="Price" />
            <input type="number" placeholder="Amount" />
            <input className="btn" type="submit" value="Add Product"/>

          </div>
        </AnimateHeight>
        <button className="panelToggle btn" onClick={ this.togglePanel }>
          { this.state.height === 0 ? 'Admin' : 'Close' }
        </button>
      </div>
    )
  }
}

export default Admin;
