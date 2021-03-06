import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import Select from 'react-select'
import CardFront from './CardFront'
// import { Link } from 'react-router-dom'
// import onePlayer from './SinglePlayerData.json'
// import allPlayers from './WholeTeamData.json'
import './Find.css'

class Find extends Component {
    constructor() {
        super()
        this.state = {
            playerData: {},
            playerID: null
        }
    }

    handleChange = (event) => {
        this.setState({ playerID: event.value })
        const currentPlayer = this.getSinglePlayerData(event)
        this.props.setCurrentPlayer(currentPlayer)
        // this.setState({ frontOfCardShowing: true})
        // move frontofcardshowing to app, pass down func togglecardview
        // showFront: false ... toggle to true when player is chosen
        // toggle to false when card is clicked
        // SHOW THE FRONT OF THE CARD, YOU COWARD
        this.props.toggleCardShowing()
    }
    
    getSinglePlayerData(event) {
        const currentPlayer = this.props.players.find(player => {
            return player.PlayerID === Number(event.value)
        })
        this.setState({ playerData: currentPlayer })
        return currentPlayer
    }
    
    render() {
        const opts = this.props.players.map(player => {
            return {value: player.PlayerID, label: player.FanDuelName}
        })
        return (
            <div>
                <form>
                    <Select
                        theme={theme => ({...theme, color: '#4b5a51', borderRadius: 0, colors: {...theme.colors, primary25:'#CC3433'}})}
                        className='select-player' 
                        onChange={(event) => this.handleChange(event)} 
                        value={this.state.playerID} 
                        options={opts}
                    />
                </form>  
                {this.props.showFront ? 
                    <CardFront 
                        playerData={this.state.playerData} 
                        toggleCardShowing={this.props.toggleCardShowing}
                        showFront={this.state.showFront}/> : 
                    <div>no player chosen</div>}
            </div>
        )
    }
}

export default Find