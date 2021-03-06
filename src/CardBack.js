import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CardBack.css'

class CardBack extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        this.props.showFrontOrBack('back')
    }

    calculateHeight() {
        const height = this.props.chosenPlayer.Height
        const feet = Math.floor(height / 12)
        const inches = (height - (feet * 12))
        const heightWeight = `${feet}' ${inches}", ${this.props.chosenPlayer.Weight}lbs`
        return heightWeight
    }
    
    getBattingHand() {
        if(this.props.chosenPlayer.BatHand === "R") {
            return `Bats right-handed.`
        } else if (this.props.chosenPlayer.BatHand === "L") {
            return `Bats left-handed.`
        } else {
            return `Is a switch-hitter.`
        }
    }

    getThrowingHand() {
        if(this.props.chosenPlayer.ThrowHand === "R") {
            return  `Throws right-handed.`
        } else if (this.props.chosenPlayer.ThrowHand === "L") {
            return  `Throws left-handed.`
        } else {
            return `Pitches with both hands.`
        }
    }

    getBirthDay() {
        if (this.props.chosenPlayer.BirthState === null) {
            return `Was born in ${this.props.chosenPlayer.BirthCity}, ${this.props.chosenPlayer.BirthCountry} on ${new Date(this.props.chosenPlayer.BirthDate).toLocaleString().split(',')[0]}.`
        } else {
            return `Was born in ${this.props.chosenPlayer.BirthCity}, ${this.props.chosenPlayer.BirthState} ${this.props.chosenPlayer.BirthCountry} on ${new Date(this.props.chosenPlayer.BirthDate).toLocaleString().split(',')[0]}.`
        }
    }

    getName() {
        return this.props.chosenPlayer.FanDuelName.toUpperCase()
    }

    getHighSchool() {
        return this.props.chosenPlayer.HighSchool !== null ? 
            `High school: ${this.props.chosenPlayer.HighSchool}.` : 
            `No high school listed.`
    }

    getCollege() {
        return this.props.chosenPlayer.College !== 'None' ? 
            `College: ${this.props.chosenPlayer.College}.` : 
            `No college listed.`
    }

    getExperience() {
        return `Has played for ${this.props.chosenPlayer.Experience} years.`
    }

    getSalary() {
        if(this.props.chosenPlayer.Salary) {
            return `Making $${this.props.chosenPlayer.Salary.toLocaleString()} this year.`
        } else {
            return `Salary not available.`
        }
    }

    // make this one conditional?
    getActionPhoto() {
        return `https://securea.mlb.com/images/players/action_shots/${this.props.chosenPlayer.MLBAMID}.jpg`
    }

    render() {
        return (
            <Link to='/'>
                <div className="card-back">
                <div className="card-back-header">
                    <img className="card-back-action-photo" src={this.getActionPhoto()} alt='player in action'/>
                    <h3 className="card-back-player-name">{this.getName()}</h3>
                </div>
                    <p>{this.calculateHeight()}</p>
                    <p>{this.getBattingHand()}</p>
                    <p>{this.getThrowingHand()}</p>
                    <p>{this.getBirthDay()}</p>
                    <p>{this.getHighSchool() }</p>
                    <p>{this.getCollege()}</p>
                    <p>{this.getExperience()}</p>
                    <p>{this.getSalary()}</p>
                </div>
            </Link>
        )
    }
}

export default CardBack