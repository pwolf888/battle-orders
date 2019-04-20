import {NEXT_PLAYER} from '../actions/next-player-action';

export default function nextPlayerReducer(state = 0, {type, payload}) {
    console.log("next action: " + payload);
    switch (type) {
        case NEXT_PLAYER:
            return payload.number;

        default:
            return state;
    }

}