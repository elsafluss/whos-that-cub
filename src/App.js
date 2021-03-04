import './App.css';
import React, { Component } from 'react'
import Find from './Find'
import List from './List'
import CardFront from './CardFront'
import CardBack from './CardBack';
import allPlayers from './WholeTeamData.json'

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
