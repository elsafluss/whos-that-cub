import React, { Component } from 'react'
import CardFront from './CardFront'
import { Link } from 'react-router-dom'
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
    
    render() {
        const opts = this.props.players.map((player, index) => {
            const playerID = `${player.PlayerID}`
            const fullName = this.props.players[index].name
            return (
                <option value={fullName} key={playerID} id={playerID}>{fullName}</option>
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
                    <Link to='/front' playerData={this.props.players} onClick={this.handleClick}>show this player</Link>
                </form>
                {this.state.playerName && <CardFront playerName={this.state.playerName} playerData={this.state.playerData}/>}
            </div>
        )
    }
}

export default Find