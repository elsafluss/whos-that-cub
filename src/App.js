import './App.css';
import React, { Component } from 'react'
import List from './List'
import Find from './Find'
import CardFront from './CardFront'
import CardBack from './CardBack';
import allPlayers from './wholeTeamData.json'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allPlayers: allPlayers,
      activePlayers: []
    }
  }

  componentDidMount() {
    this.sortOutMajors(this.state.allPlayers)
  }

  sortOutMajors(players) {
    const activePlayers = players.filter(player => player.Status === 'Active')
    this.setState({ activePlayers: activePlayers })
  }

  render() {
    return (
      <div>
        <Find players={this.state.activePlayers}/>
        <CardFront />
        <CardBack />
        <List />
      </div>
    )
  }
}


export default App;
