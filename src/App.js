// Importing the useSelector and useDispatch functions to select the require slices of state.
import React from 'react';
import { Provider } from 'react-redux';
// Importing the action creators we’ve implemented in our Account reducers.
import Account from './components/Account';
// Importing the App.css file to add styling to our App component
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Cash Balance App</h1>
        <Account />
      </div>
    </Provider>
  );
};

export default App;
