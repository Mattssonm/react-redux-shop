import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/reducer.js'

let initialState = {
  products: {
    past: [],
    present: [
      {
        name: "Super Man Wich",
        picture: "https://media.istockphoto.com/photos/turkey-sandwich-picture-id157431311?k=6&m=157431311&s=612x612&w=0&h=AHxozU3EVhaym-0rJhg00sY4_L2UQl8MNUalaQjfIGY=",
        description: "Allows you to fly!",
        price: 1000,
        amount: 10,
      },
      {
        name: "Super Sneaky Wich",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPcNHqeh1tKI1d-gpmuI6KzDzOso1FJZvwZjvaKZx8Cgkfp3Gog",
        description: "Will render you invisible!",
        price: 500,
        amount: 2,
      },
      {
        name: "Jedi Mind Power Wich",
        picture: "https://cdn-image.realsimple.com/sites/default/files/styles/portrait_435x518/public/image/images/1309/pork-cucumber_300.jpg?itok=NO769nnb",
        description: "Lets you control other humans!",
        price: 1250,
        amount: 3,
      },
      {
       name: "Super Manly Wich",
       picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlJpPePlzIZra1FEQ_2KIB6zfS1aNAZwaGaNdyDHvB01LpA0QFw",
       description: "Makes you really strong!",
       price: 750,
       amount: 4,
     },
     {
       name: "Super Big Ear Wich",
       picture: "https://imgp.golos.io/0x0/http://v.img.com.ua/b/orig/0/c0/0623c1332e823f2445a69c53574bcc00.jpg",
       description: "Will give you super hearing!",
       price: 400,
       amount: 5,
     },
     {
       name: "Wichy Super Kitchy",
       picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFEE2PPM2vjA5dHcJxcHkqtzfDKMaccB2BVjbK1sGrdWVieeQ7w",
       description: "Want to make Superpower sandwhiches? You can now!",
       price: 5000,
       amount: 6,
     },
     {
       name: "Super Nosey Which",
       picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbd86dA4fY_fE7YmK5H97Px0PJl_GoIY8IEifBYUrK-nS9RSwyw",
       description: "Will give you a giant nose!",
       price: 100,
       amount: 0,
     },
     {
       name: "VOID-wich",
       picture: "http://www.chingssecret.com/assets/uploads/images/chings-secret-schezwan-chutney-sandwitch%2003.jpg",
       description: "Allows you to STARE INTO THE ABYSS, really",
       price: 600,
       amount: 0,
     },
   ], //end of present
 }, //end of products

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
