import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
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
            playerID: ''
        }
    }

    handleChange = (event) => {
        this.setState({ playerID: event.target.value })
        this.getSinglePlayerData(event)
    }
    
    getSinglePlayerData(event) {
        const currentPlayer = this.props.players.find(player => {
            return player.PlayerID === Number(event.target.value)
        })
        this.setState({ playerData: currentPlayer })
        return currentPlayer
    }
    
    render() {
        const opts = this.props.players.map(player => {
            return (<option 
                value={player.PlayerID} 
                key={player.PlayerID}>
                {player.FanDuelName}</option>)
        })
        if (this.state.playerData.PlayerID) {
            return (
                <div>
                    <form>
                        <select onChangeCapture={(event) => this.handleChange(event)}>
                            
                            {"Choose a player"}{opts}
                        </select>
                    </form>  
                    <CardFront playerData={this.state.playerData}/>
                </div>
            )
        } else {
            return (
                <div>
                    <form>
                        <select onChangeCapture={(event) => this.handleChange(event)}>
                            {"Choose a player"}{opts}
                        </select>
                    </form>
                    <div>no player chosen</div>
                </div>
            )
        }

    }
}

export default Find