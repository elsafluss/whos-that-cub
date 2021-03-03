import React, { Component } from 'react'
import './Find.css'

class Find extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        console.log(this.props.players)
        const opts = this.props.players.map((player, index) => {
            return (
                <option value={player} key={index}>{player.FirstName} {player.LastName}</option>
            )
        })
        return (
            <div>
                <form>
                    <select>
                        {opts}
                    </select>
                </form>
                find
            </div>
        )
    }
}

export default Find