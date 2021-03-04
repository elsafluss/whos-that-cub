import './App.css';
import React, { Component } from 'react'
import Find from './Find'
import CardFront from './CardFront'
// import CardBack from './CardBack'
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

  render() {

    return (
      <div className="app">
        <header className="header">WHO'S THAT CUB?</header>
          <Find 
            players={this.state.activePlayers} 
            // setPlayersName={this.setPlayersName} 
          />
        <Switch>
          <Route exact path="/" render={() => <CardFront playerData={favoritePlayer} />} /> 
          <Route path="/front" render={() => <CardFront playerData={favoritePlayer}/>} /> 
          {/* <Route path="/back" render={() => <CardBack playerData={this.state.playerName} />} />  */}
          <Route path="/*" render={() => <div>404</div>}/> 
        </Switch>
      </div>
    )
  }
}


export default App;
