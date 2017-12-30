let store = [
  {
    id: 1,
    health: 100
  }, {
    id: 2,
    health: 100
  }
]

const attackPlayer = (id) => {
  store = store.map (player => {
    return player.id !== id ? player : { ...player, health: player.health > 0 ? player.health - 20 : 0 }
  })
}

const resetStore = () => {
  store = [
    {
      id: 1,
      health: 100
    }, {
      id: 2,
      health: 100
    }
  ]
}