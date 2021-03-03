import React, { Component } from 'react'
import CardFront from './CardFront'
// import onePlayer from './SinglePlayerData.json'
import allPlayers from './WholeTeamData.json'
import './Find.css'

class Find extends Component {
    constructor() {
        super()
        this.state = {
            playerName: '',
            playerData: {}
        }
    }

    handleChange = (event) => {
        this.setState({ playerName: event.target.value })
        this.getPlayerData()
    }
    
    handleClick = (event) => {
        event.preventDefault()
        this.getPlayerData()
    }

    getPlayerData = () => {
        const lastName = this.state.playerName.split(',')
        const thisPlayer = allPlayers.find(player => player.LastName === lastName[0])
        this.setState({ playerData: thisPlayer })
        // this will be an API call
    }

    render() {
        const opts = this.props.players.map((player, index) => {
            const fullName = `${player.LastName}, ${player.FirstName}`
            const playerID = `${player.PlayerID}`
            return (
                <option value={fullName} key={playerID} id={player.PlayerID}>{fullName}</option>
            )
        })
        return (
            <div>
                <form>
                    <select value={this.state.playerName} id="select-player" onChange={this.handleChange}>
                        {opts}
                    </select>
                    <button onClick={this.handleClick}>show this player</button>
                </form>
                <CardFront playerName={this.state.playerName} playerData={this.state.playerData}/>
            </div>
        )
    }
}

export default Find