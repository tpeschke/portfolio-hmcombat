import React, { Component } from 'react';
import './reset.css'
import './App.css';

import NavBar from './NavBar'
import routes from './routes'

class App extends Component {
  constructor() {
    super()

    this.state = {
      fighters: ''
    }
  }

  render() {

    return (

      <div className="appContent">
        <NavBar />

        <div className="border"></div>
        <div className="border"></div>

        {routes}
      </div>
    );
  }
}

export default App;
