import React, { Component } from 'react'

class CardFront extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.props.playerName}
            </div>
        )
    }
}

export default CardFront