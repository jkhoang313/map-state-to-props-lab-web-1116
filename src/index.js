import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'


import { createStore } from 'redux'
import manageBand from './reducers/manageBand'
// function(){}

// we wrap store in a function for testing purposes
export function configureStore(){
  // return createStore(manageBand, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return createStore(manageBand)
}

let store = configureStore()

// ReactDOM.render(
//   <Provider store={store}>
//     <App store={store}/>
//   </Provider>
//     ,
//     document.getElementById('root')
//
// );
