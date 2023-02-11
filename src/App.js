import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './component/redux/store';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './component/CakeContainer';

const App = ()=> {
    return (
      <Provider store = {store}>
        <div className="App">
          <CakeContainer />
        </div>
      </Provider>
    );
  
}

export default App;
