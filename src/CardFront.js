import React, { Component } from 'react'

class CardFront extends Component {
    constructor() {
        super()
        this.state = {
            currentPlayer: []
        }
    }

    render() {
            return (
                <div>
                    {this.props.playerData.FirstName} 
                    {this.props.playerData.LastName}
                    {this.props.playerData.Jersey}
                    {this.props.playerData.Position}
                    <img src={this.props.playerData.PhotoUrl} alt="the player"></img>
                </div>
            )
    }
}

export default CardFront