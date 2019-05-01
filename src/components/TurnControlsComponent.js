import React from 'react';

const TurnControlsComponent = props => {

    return (
        <div className="turn-controls">
            <div className="prev-button" onClick={props.prev}>Prev</div>
            <div className="next-button" onClick={props.next}>Next</div>
        </div>
    );
}

export default TurnControlsComponent;
