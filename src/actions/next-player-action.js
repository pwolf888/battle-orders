export const NEXT_PLAYER = 'number: nextPlayer';

export function nextPlayer(activePlayer) {
    return{
        type: NEXT_PLAYER,
        payload: {        
            number: activePlayer
        }
    }
}