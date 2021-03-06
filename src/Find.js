import React, { Component } from 'react'
import Select from 'react-select'
import CardFront from './CardFront'
import './Find.css'

class Find extends Component {
    constructor() {
        super()
        this.state = {
            playerData: {},
            playerID: null
        }
    }

    handleChange = (event) => {
        this.setState({ playerID: event.value })
        const currentPlayer = this.getSinglePlayerData(event)
        this.props.setCurrentPlayer(currentPlayer)
        this.props.toggleCardShowing()
    }
    
    getSinglePlayerData(event) {
        const currentPlayer = this.props.players.find(player => {
            return player.PlayerID === Number(event.value)
        })
        this.setState({ playerData: currentPlayer })
        return currentPlayer
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
                {this.props.showFront &&
                    <CardFront 
                        playerData={this.state.playerData} 
                        toggleCardShowing={this.props.toggleCardShowing}
                        showFront={this.state.showFront}/>}
            </div>
        )
    }
}

export default Find