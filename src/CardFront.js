import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CardFront.css'

class CardFront extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        console.log(this.props)
        const pictureID = this.props.playerData.MLBAMID
        const playerName = this.props.playerData.FanDuelName.toUpperCase()
        return (
            <Link to='/back'>
                <div className="card-front" onClick={this.props.toggleCardShowing}>
                    <h1 className='card-title'>CUBS</h1>
                    <div className='player-picture-box'>
                        <img className='player-picture' src={this.props.playerData.PhotoUrl} alt="the player"></img>
                        <span className='player-position'>
                            {this.props.playerData.Position}
                        </span>
                    </div>
                    <h2 className='player-name'>
                        {`${playerName}   
                        #${this.props.playerData.Jersey}`}
                    </h2>
                </div>
            </Link>
        )
    }
}

export default CardFront