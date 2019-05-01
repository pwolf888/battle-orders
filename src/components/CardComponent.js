import React from 'react';

const CardComponent = props => {
    // console.log(props.order);
    return (

        <div onClick={props.click} className={props.order === props.turn ? 'card-component rainbow-card' : 'card-component ' + props.players.monster } >
            <div className="card-name">{props.players.name}</div>
            <div className="card-roll">{props.players.roll}</div>
            {props.players.health ? <div className="card-health">{props.players.health}</div> : null}

        </div>
    );
}

export default CardComponent;