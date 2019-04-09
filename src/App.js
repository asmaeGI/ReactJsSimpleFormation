import React, { Component } from 'react';
import './App.css';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import myReducer from './component/ReactRedux'
import Parent from './component/Parent';


class App extends Component {
  constructor(){
 super()
    this.store=createStore(myReducer);

  }
  render() {
    return (
      <Provider store={this.store}>
      <div className="App" >
      <Parent />
      </div>
      </Provider>
    );
  }
}

export default App;
