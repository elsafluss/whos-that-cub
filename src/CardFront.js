import React, { Component } from 'react'

class CardFront extends Component {
    constructor() {
        super()
        this.state = {
            playerData: {}
        }
    }

    componentWillUnmount() {
        this.setState({ playerData: this.props.playerData })
    }

    render() {
        console.log(this.props.playerData)
        return (
            <div>
                {this.props.playerName}
                {/* {this.props.playerData.FirstName} */}
            </div>
        )
    }
}

export default CardFront