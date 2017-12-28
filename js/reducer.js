// players reducer
const playersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          health: 100
        }
      ]
    case 'ATTACK':
      return state.map (player => {
        return player.id !== action.id ? player : { ...player, health: player.health > 0 ? player.health - 20 : 0 }
      })
    case 'RESET':
      return state.map (player => {
        return { ...player, health: 100 }
      })
  }
}