import React, {Component} from 'react';

import './App.css';
import {connect} from 'react-redux';
import {addPlayer} from "./actions/add-player-action";
import {nextPlayer} from "./actions/next-player-action";

import CardComponent from "./components/CardComponent";
import InputComponent from "./components/InputComponent";
class App extends Component {
    constructor(props) {
        super(props);

        this.onAddPlayer = this
            .onAddPlayer
            .bind(this);

        this.onNextPlayer = this
            .onNextPlayer
            .bind(this);

        this.onPrevPlayer = this
            .onPrevPlayer
            .bind(this);

    }

    onAddPlayer() {
        let health = null;
        let name = document.getElementsByClassName('inputValue')[0].value;
        let monster = document.getElementsByClassName('inputValue')[1].checked;
        if (monster) {
            monster = ' monster-color';
            health = document.getElementsByClassName('inputValue')[2].value;
        } else {
            monster = ' player-color';
        }

        let roll = document.getElementsByClassName('inputValue')[3].value;

        if (name.length > 0 && isNaN(name) && roll > 0 && !isNaN(roll)) {
            this
                .props
                .onAddPlayer(name, roll, monster, health);

        }

    }

    activePlayer = 0;
    onNextPlayer() {
        if (this.props.players.length > 0) {
            console.log("onNextPlayer: " + this.activePlayer);
            this.activePlayer++;
            if (this.activePlayer === this.props.players.length) {
                this.activePlayer = 0;
            }

            this
                .props
                .onNextPlayer(this.activePlayer);
        }
    }
    onPrevPlayer() {
        if (this.props.players.length > 1) {
            console.log("onPrevPlayer: " + this.activePlayer);
            this.activePlayer--;
            if (this.activePlayer === -1) {
                this.activePlayer = this.props.players.length - 1;
            }

            this
                .props
                .onNextPlayer(this.activePlayer);
        }
    }

    render() {
        return (
            <div className="App">
                <div className="container-grid">
                    <div className="left-side">
                        <InputComponent/>
                        <div className="input-button" onClick={this.onAddPlayer}>Add</div>
                        {
                        this.props.players.length > 1 ?
                        <div className="turn-controls">
                            <div className="prev-button" onClick={this.onPrevPlayer}>Prev</div>
                            <div className="next-button" onClick={this.onNextPlayer}>Next</div>
                        </div> : null
                        }
                    </div>
                    <div className="right-side">
                        {this.props.players.length > 0
                            ? this
                                .props
                                .players
                                .sort((a, b) => b.roll - a.roll)
                                .map((player, index) => <CardComponent
                                    key={index}
                                    order={index}
                                    turn={this.props.nextPlayer}
                                    players={player}/>)

                            : <div className="card-component rainbow-card">
                                <div>Add a Player or a Spooky Monster!</div>
                            </div>
}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({players: state.players, nextPlayer: state.nextPlayer});

const mapActionsToProps = {
    onAddPlayer: addPlayer,
    onNextPlayer: nextPlayer

}

export default connect(mapStateToProps, mapActionsToProps)(App);
