import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/reducer.js'

let initialState = {
 products: [
   {
     name: "flight-wich",
     picture: "http://www.chingssecret.com/assets/uploads/images/chings-secret-schezwan-chutney-sandwitch%2003.jpg",
     description: "Allows you to fly, really",
     price: 123,
     amount: 1,
   },
   {
     name: "cright-wich",
     picture: "http://www.chingssecret.com/assets/uploads/images/chings-secret-schezwan-chutney-sandwitch%2003.jpg",
     description: "Allows you to cry, really",
     price: 231,
     amount: 2,
   },
   {
     name: "slight-wich",
     picture: "http://www.chingssecret.com/assets/uploads/images/chings-secret-schezwan-chutney-sandwitch%2003.jpg",
     description: "Allows you to sly, really",
     price: 321,
     amount: 3,
   },
 ], //end of products
 cartList: [  ],
 historyList: [  ],
 compVisible : {
   cartHeight: 0,
   historyHeight: 0,
   adminHeight: 0,
 }
}

const store = createStore(rootReducer, initialState);
console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
