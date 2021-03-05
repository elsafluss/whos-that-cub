import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CardFront.css'

class CardFront extends Component {
    constructor() {
        super()
        this.state = {}
    }


    render() {
        const playerName = this.props.playerData.FanDuelName.toUpperCase()
        return (
            <Link to={{
                    pathname: '/back',
                    state: {playerData: this.props.playerData}
                }}>
                <div className="card-front">
                    <p className='card-title'>CUBS</p>
                    
                    <img className='player-picture' src={this.props.playerData.PhotoUrl} alt="the player"></img>

                    <h1 className='player-name'>
                        {`${playerName},   
                        #${this.props.playerData.Jersey}`}
                    </h1>

                        <span className='player-position'>
                            {this.props.playerData.Position}
                        </span>

                </div>
            </Link>
        )
    }
}

export default CardFront