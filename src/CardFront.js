import React, { Component } from 'react'

class CardFront extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        if(this.props.playerData) {
            return (
                <div>
                <p>
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
    } else {
        return null
    }}
}

export default CardFront