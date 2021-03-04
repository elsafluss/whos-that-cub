import './App.css';
import React, { Component } from 'react'
import Find from './Find'
import List from './List'
import CardFront from './CardFront'
import CardBack from './CardBack';
// import allPlayers from './WholeTeamData.json'
import { getAllCubsPlayers } from './Utility';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allPlayers: [],
      activePlayers: []
    }
  }

  componentDidMount() {
    getAllCubsPlayers()
    .then(data => this.getActivePlayers(data))
    .catch(error => console.log(error))
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
