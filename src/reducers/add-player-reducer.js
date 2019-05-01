import {ADD_PLAYER} from '../actions/add-player-action';
import {REMOVE_PLAYER} from '../actions/add-player-action';

export default function playerReducer(state = [], {type, payload}) {
    // console.log(payload);
    switch (type) {
        case ADD_PLAYER:
            return [
                ...state, {
                    name: payload.name,
                    roll: payload.roll,
                    monster: payload.monster,
                    health: payload.health
                }
            ]
        case REMOVE_PLAYER:
            return state.filter((data, i) => i !== payload.id);
                
            
        default:
            return state;
    }

}