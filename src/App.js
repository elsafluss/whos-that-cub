import './App.css';
import React, { Component } from 'react'
import Find from './Find'
import List from './List'
import CardFront from './CardFront'
import CardBack from './CardBack';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <Find />
        <CardFront />
        <CardBack />
        <List />
      </div>
    )
  }
}


export default App;
