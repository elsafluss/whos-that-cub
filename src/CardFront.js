import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import favoritePlayer from './SinglePlayerData.json'
import './CardFront.css'

class CardFront extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        let currentPlayer = this.props.playerData
        if(!currentPlayer.MLBAMID) {
            currentPlayer = favoritePlayer
        }
        const pictureID = currentPlayer.MLBAMID
        const playerName = currentPlayer.FanDuelName.toUpperCase()
        return (
            <Link to='/back'>
                <div className="card-front" onClick={this.props.toggleCardShowing}>
                    <h1 className='card-title'>CUBS</h1>
                    <div className='player-picture-box'>
                        <img className='player-picture' src={`https://securea.mlb.com/mlb/images/players/head_shot/${pictureID}.jpg`} alt="the player"></img>
                        <span className='player-position'>
                            {currentPlayer.Position}
                        </span>
                    </div>
                    <h2 className='player-name'>
                        {`${playerName}   
                        #${currentPlayer.Jersey}`}
                    </h2>
                </div>
            </Link>
        )
    }
}

export default CardFront