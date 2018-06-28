import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer.js';

class App extends Component {
  render() {
    const name="Norbi";

    return (
      <div>
        <h1>My first app-{name}</h1>
        <Timer label="Date and time"/>
        <Timer label="What!!!!!"/>
      </div>
    );
  }
}

export default App;
