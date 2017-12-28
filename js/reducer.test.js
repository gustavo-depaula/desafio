const testAddPlayer = () => {
  const stateBefore = []
  const action = {
    type: 'ADD',
    id: 0,
  }
  const stateAfter = [
    {
      id: 0,
      health: 100
    }
  ]

  // using deepfreeze library to prevent any mutations on the
  // stateBefore and action objs
  deepFreeze(stateBefore)
  deepFreeze(action)

  // using mjackson expect library to test the ADD_PLAYER acion
  // on the players reducers
  expect(
    playersReducer(stateBefore, action)
  ).toEqual(stateAfter)
}
testAttackPlayer = () => {
  const stateBefore = [
    {
      id: 0,
      health: 100
    }, {
      id: 1,
      health: 100
    }
  ]
  const action = {
    type: 'ATTACK',
    id: 0
  }
  const stateAfter = [
    {
      id: 0,
      health: 80
    }, {
      id: 1,
      health: 100
    }
  ]

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    playersReducer(stateBefore, action)
  ).toEqual(stateAfter)
}

const testResetGame = () => {
  const stateBefore = [
    {
      id: 0,
      health: 80
    }, {
      id: 1,
      health: 100
    }
  ]
  const action = {
    type: 'RESET'
  }
  const stateAfter = [
    {
      id: 0,
      health: 100
    }, {
      id: 1,
      health: 100
    }
  ]

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    playersReducer(stateBefore, action)
  ).toEqual(stateAfter)
}

testReducer = () => {
  testAddPlayer()
  testAttackPlayer()
  testResetGame()
  console.log("Todos os testes passaram")
}

testReducer()