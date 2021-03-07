import './App.css';
import React, { Component } from 'react'
import Find from './Find'
import favoritePlayer from './SinglePlayerData.json'
import CardBack from './CardBack'
import { getAllCubsPlayers, online } from './Utility';
import { Route, Switch, Link } from 'react-router-dom';
import CardFront from './CardFront';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allPlayers: [],
      activePlayers: [],
      chosenPlayer: favoritePlayer,
      showCardSide: 'front',
      favoritePlayer: null
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

  showFrontOrBack = (sideToShow) => {
      this.setState({ showCardSide: sideToShow})
  }

  setCurrentPlayer = (chosenPlayer) => {
    this.setState({ chosenPlayer: chosenPlayer })
  }

  getActivePlayers(players) {
    const activePlayers = players.filter(player => player.Status === 'Active')
    this.setState({ activePlayers: activePlayers })
  }

  favoriteThisOne = () => {
    this.setState({ favoritePlayer: this.state.chosenPlayer.PlayerID})
  }

  render() {
    return (
      <div className="app">
        <Link to="/" className="header">WHO'S THAT CUB?</Link>
        <Find 
          players={this.state.activePlayers} 
          setCurrentPlayer={this.setCurrentPlayer} 
          showFrontOrBack={this.showFrontOrBack}
        />
        <button 
          className="make-favorite-button" 
          onClick={this.favoriteThisOne}>
          this one is my favorite
        </button>        
        <button 
          className="show-favorite-button" 
          onClick={this.favoriteThisOne}>
          show me my favorite
        </button>
        <Switch>
          <Route exact path="/" render={() => 
            <CardFront 
              chosenPlayer={this.state.chosenPlayer} 
              showFrontOrBack={this.showFrontOrBack}
              showCardSide={this.state.showCardSide}/> } />
          <Route path="/back" render={() => 
            <CardBack 
              chosenPlayer={this.state.chosenPlayer} 
              showFrontOrBack={this.showFrontOrBack} 
              showCardSide={this.state.showCardSide}/> } />
          <Route path="/*" render={() => <div>404</div>}/> 
        </Switch>
      </div>
    )
  }
}


export default App;
