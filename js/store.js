const { createStore } = Redux
const store = createStore(playersReducer)

store.dispatch({
  type: 'ADD',
  id: 1,
})
store.dispatch({
  type: 'ADD',
  id: 2,
})

console.log(store.getState())