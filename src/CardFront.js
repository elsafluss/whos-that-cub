import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CardFront.css'
import baseball from './baseball.png'
import favorited from './favorited.png'
import PropTypes from 'prop-types'

class CardFront extends Component {
    constructor() {
        super()
        this.state = {
            isFavorite: false
        }
    }

    setName() {
        return this.props.chosenPlayer.FanDuelName.toUpperCase()
    }

    setPictureID() {
        return this.props.chosenPlayer.MLBAMID
    }

    isFavorite() {
        const favorited = this.props.chosenPlayer.PlayerID === this.props.favoritePlayer.PlayerID
        return favorited
    }

    render() {
        return (
            <Link to='/back' 
                className='card-front'
                onClick={() => this.props.showFrontOrBack('back')}>
                <h1 className='card-title'>CUBS</h1>
                <div className='player-picture-box'>
                    <div className='squish'></div>
                    <img className='player-picture' 
                        src={`https://securea.mlb.com/mlb/images/players/head_shot/${this.setPictureID()}.jpg`} 
                        alt="the player"></img>
                    <div className='player-footer'>
                        {this.isFavorite() && <img 
                            src={favorited} 
                            alt='the Cubs bear logo' 
                            className='player-favorited'/>}
                        <div className='player-position'>
                            <span className='position-letters'>
                                {this.props.chosenPlayer.Position}
                            </span>
                            <img className="position-baseball" src={baseball} alt="a baseball"/>
                        </div>
                    </div>
                </div>
                <h2 className='player-name'>
                    {`${this.setName()} #${this.props.chosenPlayer.Jersey}`}
                </h2>
            </Link>
        )
    }
}

CardFront.propTypes = {
    chosenPlayer: PropTypes.object,
    favoritePlayer: PropTypes.object,
    showFrontOrBack: PropTypes.func
}

export default CardFront