import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Select from 'react-select'
import './Find.css'

class Find extends Component {
    constructor() {
        super()
        this.state = {
            chosenPlayer: {},
            playerID: null
        }
    }

    handleChange = (event) => {
        this.props.showFrontOrBack('front')
        this.setState({ playerID: event.value })
        const chosenPlayer = this.getSinglePlayerData(event)
        this.props.setCurrentPlayer(chosenPlayer)
    }
    
    getSinglePlayerData(event) {
        const chosenPlayer = this.props.players.find(player => {
            return player.PlayerID === Number(event.value)
        })
        this.setState({ chosenPlayer: chosenPlayer })
        return chosenPlayer
    }
    
    render() {
        const opts = this.props.players.map(player => {
            return {value: player.PlayerID, label: player.FanDuelName}
        })
        return (
            <div>
                <form>
                    <Select
                        theme={theme => ({...theme, color: '#4b5a51', borderRadius: 0, colors: {...theme.colors, primary25:'#CC3433'}})}
                        className='select-player' 
                        onChange={(event) => this.handleChange(event)} 
                        value={this.state.playerID} 
                        options={opts}
                    />
                </form>  
            </div>
        )
    }
}

Find.propTypes = {
    showFrontOrBack: PropTypes.func,
    setCurrentPlayer: PropTypes.func,
    players: PropTypes.array
}

export default Find