import React, { Component } from 'react'
import CardFront from './CardFront'
// import onePlayer from './SinglePlayerData.json'
// import allPlayers from './WholeTeamData.json'
import './Find.css'

class Find extends Component {
    constructor() {
        super()
        this.state = {
            playerData: {}
        }
    }

    handleChange = (event) => {
        this.setState({ playerName: event.target.value })
    }
    
    handleClick = (event) => {
        event.preventDefault()
        this.getSinglePlayerData()
    }

    componentDidMount() {

    }
    
    getSinglePlayerData = () => {
        const lastName = this.state.playerName.split(',')
        const thisPlayer = this.props.players.find(player => player.LastName === lastName[0])
        this.setState({ playerData: thisPlayer })
    }
    
    render() {
        // move the "get player's name" function to App, pass the returned value down

        const opts = this.props.players.map((player, index) => {
            this.props.setPlayersName()
            const playerID = `${player.PlayerID}`
            const fullName = this.props.players[index].name
            return (
                <option value={fullName} key={playerID} id={player.PlayerID}>{fullName}</option>
            )
        })

        return (
            <div>
                <form>
                    <select 
                        value={this.state.playerName} 
                        id="select-player" 
                        onChange={this.handleChange}>
                        {opts}
                    </select>
                    <button onClick={this.handleClick}>show this player</button>
                </form>
                {this.state.playerName && <CardFront playerName={this.state.playerName} playerData={this.state.playerData}/>}
            </div>
        )
    }
}

export default Find