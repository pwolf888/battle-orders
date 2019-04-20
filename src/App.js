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

    }

    onAddPlayer() {

        let name = document.getElementsByClassName('inputValue')[0].value;
        let monster = document.getElementsByClassName('inputValue')[1].checked;
        if (monster) {
            monster = ' monster-color';
        } else {
            monster = ' player-color';
        }
        let roll = document.getElementsByClassName('inputValue')[2].value;

       
        if (name.length > 0 && isNaN(name) && roll > 0 && !isNaN(roll)) {
            this
                .props
                .onAddPlayer(name, roll, monster);

        }

    }
    activePlayer = 0;
    onNextPlayer() {

      console.log("onNextPlayer: "+this.props);
      this.activePlayer++;
      if(this.activePlayer === this.props.players.length ) {
        this.activePlayer = 0;
      }
       this.props.onNextPlayer(this.activePlayer);
    }

    render() {
        return (
            <div className="App">

                <InputComponent/>
                <div className="input-button" onClick={this.onAddPlayer}>Add</div>
                <div className="turn-controls">
                    <div className="prev-button">Prev</div>
                    <div className="next-button" onClick={this.onNextPlayer}>Next</div>
                </div>
                {this.props.players.length > 0
                    ? this
                        .props
                        .players
                        .sort((a, b) => b.roll - a.roll)
                        .map((player, index) => <CardComponent key={index} order={index} turn={this.props.nextPlayer} players={player}/>)

                    : <div className="card-component rainbow-card">
                        <div>Add a Player or a Spooky Monster!</div>
                    </div>
}

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
