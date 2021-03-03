import React, { Component } from 'react'
import CardFront from './CardFront'
import onePlayer from './SinglePlayerData.json'
import './Find.css'

class Find extends Component {
    constructor() {
        super()
        this.state = {
            playerName: ''
        }
    }

    handleChange = (event) => {
        this.setState({ playerName: event.target.value })
    }
    
    getPlayerData = () => {
        // this will be an API call
        const playerData = onePlayer.find(player => player.PlayerID === )
    }

    render() {
        const opts = this.props.players.map((player) => {
            const fullName = `${player.FirstName} ${player.LastName}`
            const playerID = `${player.PlayerID}`
            return (
                <option value={fullName} key={playerID} id={playerID}>{fullName}</option>
            )
        })
        return (
            <div>
                <form>
                    <select value={this.state.playerName} onChange={this.handleChange}>
                        {opts}
                    </select>
                </form>
                <CardFront playerName={this.state.playerName}/>
            </div>
        )
    }
}

export default Find