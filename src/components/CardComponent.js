import React, { Component } from 'react';






const CardComponent = props => {
    return (

        <div className={props.players.monster ? 'card-component monster-color' : 'card-component player-color'} >
            <div className="card-name">{props.players.name}</div>
            <div className="card-roll">{props.players.roll}</div>


        </div>
    );
}

export default CardComponent;