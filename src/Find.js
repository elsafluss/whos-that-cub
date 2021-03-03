import React, { Component } from 'react'
import './Find.css'

class Find extends Component {
    constructor() {
        super()
        this.state = {
            player: ''
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({ player: event.target.value })
    }

    render() {
        // console.log(this.props.players)
        const opts = this.props.players.map((player, index) => {
            const fullName = `${player.FirstName} ${player.LastName}`
            return (
                <option value={fullName} key={index}>{fullName}</option>
            )
        })
        return (
            <div>
                <form>
                    <select value={this.state.player} onChange={this.handleChange}>
                        {opts}
                    </select>
                </form>
                find
            </div>
        )
    }
}

export default Find