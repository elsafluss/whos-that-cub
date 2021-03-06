import React, { Component } from 'react'

class CardBack extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (

            <div>card back</div>
            // <Link to={{
            //         pathname: '/front',
            //         state: {playerData: this.props.playerData}
            //     }}>
            //     <div className="card-front">
            //         <h1 className='card-title'>CUBS</h1>
            //         <div className='player-picture-box'>
            //             <img className='player-picture' src={this.props.playerData.PhotoUrl} alt="the player"></img>
            //             <span className='player-position'>
            //                 <span className="player-jersey">
            //                     {this.props.playerData.Position}
            //                 </span>
            //             </span>
            //         </div>
            //         <h2 className='player-name'>
            //             {`${playerName}   
            //             #${this.props.playerData.Jersey}`}
            //         </h2>
            //     </div>
            // </Link>
        )
    }
}

export default CardBack