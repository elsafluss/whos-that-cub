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
        const heightWeight = `He is ${feet}' ${inches}" tall and weighs ${this.props.chosenPlayer.Weight}lbs`
        return heightWeight
    }
    
    getBattingHand() {
        if(this.props.chosenPlayer.BatHand === "R") {
            return `He bats right-handed.`
        } else if (this.props.chosenPlayer.BatHand === "L") {
            return `He bats left-handed.`
        } else {
            return `He is a switch-hitter.`
        }
    }

    getThrowingHand() {
        if(this.props.chosenPlayer.ThrowHand === "R") {
            return  `He throws right-handed.`
        } else if (this.props.chosenPlayer.ThrowHand === "L") {
            return  `He throws left-handed.`
        } else {
            return `He pitches from both sides.`
        }
    }

    getBirthDay() {
        if (this.props.chosenPlayer.BirthState === null) {
            return `He was born in ${this.props.chosenPlayer.BirthCity}, ${this.props.chosenPlayer.BirthCountry} on ${new Date(this.props.chosenPlayer.BirthDate).toLocaleString().split(',')[0]}.`
        } else {
            return `He was born in ${this.props.chosenPlayer.BirthCity}, ${this.props.chosenPlayer.BirthState} ${this.props.chosenPlayer.BirthCountry} on ${new Date(this.props.chosenPlayer.BirthDate).toLocaleString().split(',')[0]}.`
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
        return `He has played in the majors for ${this.props.chosenPlayer.Experience} years.`
    }

    getSalary() {
        if(this.props.chosenPlayer.Salary) {
            return `He is making $${this.props.chosenPlayer.Salary.toLocaleString()} this year.`
        } else {
            return `His salary was not available.`
        }
    }

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
                    <div className="card-back-stats-block">
                        <div className="card-back-height">{this.calculateHeight()}</div>
                        <div className="card-back-batting">{this.getBattingHand()}</div>
                        <div className="card-back-throwing">{this.getThrowingHand()}</div>
                        <div className="card-back-birthday">{this.getBirthDay()}</div>
                        <div className="card-back-high-school">{this.getHighSchool() }</div>
                        <div className="card-back-college">{this.getCollege()}</div>
                        <div className="card-back-experience">{this.getExperience()}</div>
                        <div className="card-back-salary">{this.getSalary()}</div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default CardBack