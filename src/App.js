import './App.css';
import React, { Component } from 'react'
import Find from './Find'
import List from './List'
import CardFront from './CardFront'
import CardBack from './CardBack';
import { getAllCubsPlayers, online } from './Utility';


class App extends Component {
  constructor() {
    super()
    this.state = {
      allPlayers: [],
      activePlayers: []
    }
  }

  // to turn on/off the API call, change const 'online' in Utility
  componentDidMount() {
    if (online) {
      getAllCubsPlayers()
      .then(data => this.getActivePlayers(data))
      .catch(error => console.log(error))
    } else {
      const allPlayers = getAllCubsPlayers()
      this.getActivePlayers(allPlayers)
    }
  }

  getActivePlayers(players) {
    const activePlayers = players.filter(player => player.Status === 'Active')
    this.setState({ activePlayers: activePlayers })
  }

  render() {
    return (
      <div className="app">
        <header className="header">WHO'S THAT CUB?</header>
        <Find players={this.state.activePlayers}/>
        <CardFront />
        <CardBack />
        <List />
      </div>
    )
  }
}


export default App;
