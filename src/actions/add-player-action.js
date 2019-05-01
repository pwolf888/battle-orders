export const ADD_PLAYER = 'name: addPlayer';
export const REMOVE_PLAYER = 'name: removePlayer';

export function addPlayer(newPlayer, newRoll, newMonster, newHealth) {
    return{
        type: ADD_PLAYER,
        payload: {        
            name: newPlayer,
            roll: newRoll,
            monster: newMonster,
            health: newHealth
        }
    }
}


export function removePlayer(newId) {
    return{
        type: REMOVE_PLAYER,
        payload: {        
            id: newId
        }
    }
}