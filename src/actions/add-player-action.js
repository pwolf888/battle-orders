export const ADD_PLAYER = 'name: addPlayer';

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