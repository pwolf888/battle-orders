import {ADD_PLAYER} from '../actions/add-player-action';

export default function playerReducer(state = [], {type, payload}) {
    console.log(payload);
    switch (type) {
        case ADD_PLAYER:
            return [
                ...state, {
                    name: payload.name,
                    roll: payload.roll,
                    monster: payload.monster
                }
            ]
      
        default:
            return state;
    }

}