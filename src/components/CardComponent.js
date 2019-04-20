import React, { Component } from 'react';

const CardComponent = props => {
    console.log(props.turn);
    return (

        <div className={props.order === props.turn ? 'card-component rainbow-card' : 'card-component ' + props.players.monster } >
            <div className="card-name">{props.players.name}</div>
            <div className="card-roll">{props.players.roll}</div>


        </div>
    );
}

export default CardComponent;