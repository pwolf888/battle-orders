import React, {Component} from 'react';

const InputComponent = props => {

    return (
        <div>
            <div className="input-name">
                <input className="inputValue" name="name" placeholder="Name"/>
            </div>
            <div className="input-monster">
                <input className="inputValue" type="checkbox" />
                <div>Monster?</div>
                <input className="inputValue" name="health" placeholder="Health"/>
            </div>
            <div className="input-roll">
                <input className="inputValue" name="roll" placeholder="Roll"/>
            </div>
            
        </div>
    );
}

export default InputComponent;