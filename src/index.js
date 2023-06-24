import React from 'react';
import ReactDOM from 'react-dom';
// Importing the Provider component from react-redux required to
// set up store.
import { Provider } from 'react-redux';
//Importing the newly created store implementation
import store from "./store/store"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Render the App component wrapped in the Provider component to provide access to the Redux store
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Implementing the Provider component and passing our store as one of its props
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
