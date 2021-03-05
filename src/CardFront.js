import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CardFront extends Component {
    constructor() {
        super()
        this.state = {}
    }


    render() {
        return (
            <Link to={{
                pathname: '/back',
                state: {playerData: this.props.playerData}
            }}>
                {this.props.playerData.FirstName} 
                {this.props.playerData.LastName}
                {this.props.playerData.Jersey}
                {this.props.playerData.Position}
                <img src={this.props.playerData.PhotoUrl} alt="the player"></img>
            </Link>
        )
    }
}

export default CardFront