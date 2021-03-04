import './App.css';
import React, { Component } from 'react'
import Find from './Find'
import CardFront from './CardFront'
import { getAllCubsPlayers, online } from './Utility';
import { Route, Switch } from 'react-router-dom';
import favoritePlayer from './SinglePlayerData.json'


class App extends Component {
  constructor() {
    super()
    this.state = {
      allPlayers: [],
      activePlayers: []
    }
    this.setPlayersName = this.setPlayersName.bind(this)

  }

  // to turn on/off the API call, toggle 'online' const in Utility
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

  setPlayersName() {
    this.state.activePlayers.map(player => {
      const fullName = `${player.LastName}, ${player.FirstName}`
      player.name = fullName
      return fullName
    })
  }

  render() {
    return (
      <div className="app">
        <header className="header">WHO'S THAT CUB?</header>
        <Find players={this.state.activePlayers} setPlayersName={this.setPlayersName}/>
        <Switch>
          <Route exact path="/" render={() => <CardFront playerData={favoritePlayer} />} /> 
          <Route path="/:{playerName}" /> if :playerName, render cardfront of that player
          <Route path="/:{playerName}/back" /> :playerName/back, render cardback of that player
          <Route path="/*" /> same as "/"
        </Switch>
      </div>
    )
  }
}


export default App;
