import React, { Component } from 'react'
import './CardBack.css'

class CardBack extends Component {
    constructor() {
        super()
        this.state = {}
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
        return this.props.chosenPlayer.HighSchool !== 'None' ? 
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

    render() {
        console.log(this.props)
        return (
                <div className="card-back">
                    <h1 className='card-title'>CUBS</h1>
                    <h3>{this.getName()}</h3>
                    <p>{this.calculateHeight()}</p>
                    <p>{this.getBirthDay()}</p>
                    <p>{this.getBattingHand()}</p>
                    <p>{this.getThrowingHand()}</p>
                    <p>{this.getHighSchool() }</p>
                    <p>{this.getCollege()}</p>
                    <p>{this.getExperience()}</p>
                </div>
        )
    }
}

export default CardBack