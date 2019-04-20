import React, {Component} from 'react';

import './App.css';
import {connect} from 'react-redux';
import {addPlayer} from "./actions/add-player-action";

import CardComponent from "./components/CardComponent";

class App extends Component {
    constructor(props) {
        super(props);

        this.onAddPlayer = this
            .onAddPlayer
            .bind(this);
    }

    onAddPlayer(e) {

        let name = document.getElementsByClassName('inputValue')[0].value;
        let monster = document.getElementsByClassName('inputValue')[1].checked;

        let roll = document.getElementsByClassName('inputValue')[2].value;

        console.log(monster);
        if (name.length > 0 && isNaN(name) && roll > 0 && !isNaN(roll)) {
            this
                .props
                .onAddPlayer(name, roll, monster);

        }

    }

    render() {
        return (
            <div className="App">
                <div className="input-name">

                    <input className="inputValue" name="name" placeholder="Name"/>

                </div>
                <div className="input-monster">
                    <input className="inputValue" type="checkbox"/>
                    Monster?
                </div>
                <div className="input-roll">

                    <input className="inputValue" name="roll" placeholder="Roll"/>
                </div>

                <div className="input-button" onClick={this.onAddPlayer}>Add</div>

                {this.props.players.length > 0
                    ? this
                        .props
                        .players
                        .sort((a, b) => b.roll - a.roll)
                        .map((player, index) => <CardComponent key={index} players={player}/>)

                    : <div className="card-component blank-card">
                        <div>Add a Player or a Spooky Monster!</div>
                    </div>
}

            </div>
        );
    }
}

const mapStateToProps = state => ({players: state.players});

const mapActionsToProps = {
    onAddPlayer: addPlayer

}

export default connect(mapStateToProps, mapActionsToProps)(App);
