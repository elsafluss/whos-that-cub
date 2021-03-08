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
      activePlayers: [],
      allPlayers: [],
      chosenPlayer: getFromLocalStorage(),
      favoritePlayer: getFromLocalStorage(),
      favoritePlayerID: null,
      showCardSide: 'front',
      serverError: false
    }
  }

  // to turn on/off the API call, toggle 'online' const in Utility
  componentDidMount() {
    if (online) {
      getAllCubsPlayers()
      .then(data => this.getActivePlayers(data))
      .catch(error => {
        this.setState({ serverError: true })
      })
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
    activePlayers.sort((a, b) => {
      if(a.LastName < b.LastName) {
        return -1
      } else {
        return 1
      }
    })
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
              serverError={this.state.serverError}
              /> } />
          <Route path="/back" render={() => 
            <CardBack 
              chosenPlayer={this.state.chosenPlayer} 
              showFrontOrBack={this.showFrontOrBack} 
            /> } />
          <Route path="/*" render={() => <div className='error'><p>That player was not found.</p><p>Please use the search to find a current Cubs player.</p></div>}/> 
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