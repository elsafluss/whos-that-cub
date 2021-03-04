import React, { Component } from 'react'
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
        console.log(this.state)
        const opts = this.props.players.map(player => {
            return (<option 
                value={player.PlayerID} 
                key={player.PlayerID}>{player.FanDuelName}</option>)
        })

        return (
            <div>
                <form>
                    <select onChange={this.handleChange}>
                        {opts}
                    </select>
                </form>
                {!this.state.playerData.length ? <div>no player chosen</div> :
                <CardFront playerData={this.state.playerData}/>
                }
            </div>
        )
    }
}

export default Find