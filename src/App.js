import './App.css';
import React, { Component } from 'react'
import Find from './Find'
import CardBack from './CardBack'
import { getAllCubsPlayers, online } from './Utility';
import { Route, Switch } from 'react-router-dom';
import CardFront from './CardFront';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allPlayers: [],
      activePlayers: [],
      chosenPlayer: {},
      showFront: false
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
  
  toggleCardShowing = () => {
    this.setState({ showFront: !this.state.showFront})
  }

  setCurrentPlayer = (chosenPlayer) => {
    this.setState({ chosenPlayer: chosenPlayer})
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
            setCurrentPlayer={this.setCurrentPlayer} 
            toggleCardShowing={this.toggleCardShowing}
            showFront={this.state.showFront}
          />
        <Switch>
          <Route exact path="/" /> 
          <Route path="/front" render={() => <CardFront chosenPlayer={this.state.chosenPlayer} /> } />
          <Route path="/back" component={ CardBack } /> 
          <Route path="/*" render={() => <div>404</div>}/> 
        </Switch>
      </div>
    )
  }
}


export default App;
