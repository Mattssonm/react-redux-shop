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
   {
    name: "cringe-wich",
    picture: "http://www.chingssecret.com/assets/uploads/images/chings-secret-schezwan-chutney-sandwitch%2003.jpg",
    description: "Allows you to cringe, really",
    price: 321,
    amount: 4,
  },
  {
    name: "sringe-wich",
    picture: "http://www.chingssecret.com/assets/uploads/images/chings-secret-schezwan-chutney-sandwitch%2003.jpg",
    description: "Allows you to sringe, really",
    price: 321,
    amount: 5,
  },
  {
    name: "bringe-wich",
    picture: "http://www.chingssecret.com/assets/uploads/images/chings-secret-schezwan-chutney-sandwitch%2003.jpg",
    description: "Allows you to bringe, really",
    price: 321,
    amount: 6,
  },
  {
    name: "tringe-wich",
    picture: "http://www.chingssecret.com/assets/uploads/images/chings-secret-schezwan-chutney-sandwitch%2003.jpg",
    description: "Allows you to tringe, really",
    price: 321,
    amount: 0,
  },
  {
    name: "VOID-wich",
    picture: "http://www.chingssecret.com/assets/uploads/images/chings-secret-schezwan-chutney-sandwitch%2003.jpg",
    description: "Allows you to STARE INTO THE ABYSS, really",
    price: 321,
    amount: 0,
  },
 ], //end of products
 cartList: {
   past: [],
   present: [],
   future: [],
 },
 historyList: [],
 compVisible : {
   historyHeight: 0,
   adminHeight: 0,
 }
}

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
