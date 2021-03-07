import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Find from './Find'
import CardFront from './CardFront';
import CardBack from './CardBack'
import { getAllCubsPlayers, 
  online, 
  saveToLocalStorage, 
  getFromLocalStorage 
} from './Utility';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allPlayers: [],
      activePlayers: [],
      chosenPlayer: getFromLocalStorage(),
      showCardSide: 'front',
      favoritePlayerID: null,
      favoritePlayer: getFromLocalStorage()
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

  setChosenPlayer = (chosenPlayer) => {
    this.setState({ chosenPlayer: chosenPlayer })
  }

  getActivePlayers(players) {
    const activePlayers = players.filter(player => player.Status === 'Active')
    this.setState({ activePlayers: activePlayers })
  }

  favoriteThisOne = () => {
    const favoritePlayerID = this.state.chosenPlayer.PlayerID
    const favoritePlayerData = this.state.activePlayers.find(player => player.PlayerID === favoritePlayerID)
    saveToLocalStorage(favoritePlayerData)
    this.setState({ favoritePlayer: favoritePlayerData })
    this.setChosenPlayer(favoritePlayerData)
  }

  render() {
    return (
      <div className="app">
        <Link to="/" className="header">WHO'S THAT CUB?</Link>
        <Find 
          players={this.state.activePlayers} 
          setChosenPlayer={this.setChosenPlayer} 
          showFrontOrBack={this.showFrontOrBack}
        />
        <Switch>
          <Route exact path="/" render={() => 
            <CardFront 
              chosenPlayer={this.state.chosenPlayer} 
              showFrontOrBack={this.showFrontOrBack}
              favoritePlayer={this.state.favoritePlayer}
              /> } />
          <Route path="/back" render={() => 
            <CardBack 
              chosenPlayer={this.state.chosenPlayer} 
              showFrontOrBack={this.showFrontOrBack} 
            /> } />
          <Route path="/*" render={() => <div>404</div>}/> 
        </Switch>
        <button 
          className="make-favorite-button" 
          onClick={this.favoriteThisOne}>
          this one is my favorite
        </button>        
        <button 
          className="show-favorite-button" 
          onClick={() => this.setChosenPlayer(this.state.favoritePlayer)}>
          show me my favorite
        </button>
      </div>
    )
  }
}

export default App;