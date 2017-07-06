import React, { Component } from 'react';
import logo from '../images/logo.svg';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Auth from './auth/auth';




class App extends Component {
  constructor(props){
      super();

      this.state = {
          condition: 'LP',
      }
  }



    render() {
      switch (this.state.condition)
      {
          case 'LP':
      return(
          <div className="App">
              <Auth />
          </div>
      );
          case 'BRD':
          {
              return(
                  <div className="App">
                      <h1>In Board</h1>
                  </div>);
          }
      break;
      }
}}

export default App;
