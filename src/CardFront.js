import React, { Component } from 'react'
import favoritePlayer from './SinglePlayerData.json'

class CardFront extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        console.log(this.props)
        if (this.props.fromHome === true) {
            // show the favoritePlayer
            return (
                <div>
                    <p>from home true
                        {favoritePlayer.FirstName} {favoritePlayer.LastName}
                    </p>
                    <p>
                        {favoritePlayer.Jersey}
                    </p>
                    <p>
                        {favoritePlayer.Position}
                    </p>
                    <img src={favoritePlayer.PhotoUrl} alt="the player"></img>
                </div>
            )
        } else {
            // show the currentPlayer
            return (
                <div>
                    <p>from home false
                        {this.props.playerData.FirstName} {this.props.playerData.LastName}
                    </p>
                    <p>
                        {this.props.playerData.Jersey}
                    </p>
                    <p>
                        {this.props.playerData.Position}
                    </p>
                    <img src={this.props.playerData.PhotoUrl} alt="the player"></img>
                </div>
            )
        } 
    }
}

export default CardFront