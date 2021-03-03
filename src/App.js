import './App.css';
import React, { Component } from 'react'
import Search from './Search'
import CardFront from './CardFront'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Search />
        <CardFront />
      </div>
    )
  }
}


export default App;
