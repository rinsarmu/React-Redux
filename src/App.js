import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './component/CakeContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <CakeContainer />
      </div>
    );
  }
}

export default App;
