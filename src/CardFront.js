import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CardFront.css'
import baseball from './baseball.png'

class CardFront extends Component {
    constructor() {
        super()
        this.state = {}
    }

    setName() {
        return this.props.chosenPlayer.FanDuelName.toUpperCase()
    }

    setPictureID() {
        return this.props.chosenPlayer.MLBAMID
    }

    render() {
        return (
            <Link to='/back' className='card-front'
            onClick={() => this.props.showFrontOrBack('back')}>
                <h1 className='card-title'>CUBS</h1>
                <div className='player-picture-box'>
                    <img className='player-picture' 
                        src={`https://securea.mlb.com/mlb/images/players/head_shot/${this.setPictureID()}.jpg`} 
                        alt="the player"></img>
                    <div className='player-position'>
                        <span className='position-letters'>
                            {this.props.chosenPlayer.Position}
                        </span>
                        <img className="position-baseball" src={baseball} alt="a baseball"/>
                    </div>
                </div>
                <h2 className='player-name'>
                    {`${this.setName()}   
                    #${this.props.chosenPlayer.Jersey}`}
                </h2>
            </Link>
        )
    }
}

export default CardFront