attackP1Btn = document.getElementById('attackPlayerOne')
attackP2Btn = document.getElementById('attackPlayerTwo')

const render = () => {
  document.getElementById('playerOneHealth').innerText = store.getState().find(player => player.id === 1).health
  document.getElementById('playerTwoHealth').innerText = store.getState().find(player => player.id === 2).health
  store.getState().find(player => {
    if (player.health === 0) {
      let winner = player.id === 1 ? 2 : 1
      // disable btns
      attackP1Btn.setAttribute('disabled', 'true')
      attackP2Btn.setAttribute('disabled', 'true')

      document.getElementById('winnerCongratulations').innerText = `Parabéns Jogador ${winner}! Você ganhou!`
      document.getElementById('modal').classList.add('is-active')
    }
  })
}

store.subscribe(render)
render() // initial render

// player 2 attacking player 1
attackP1Btn.addEventListener('click', () => {
  if (!attackP1Btn.getAttribute('disabled')) {
    store.dispatch({
      type: 'ATTACK',
      id: 1
    })
  }
})

// player 1 attacking player 2
attackP2Btn.addEventListener('click', () => {
  if (!attackP2Btn.getAttribute('disabled')) {
    store.dispatch({
      type: 'ATTACK',
      id: 2
    })
  }
})

// helper functions
const resetGame = () => {
  attackP1Btn.removeAttribute('disabled')
  attackP2Btn.removeAttribute('disabled')
  store.dispatch({
    type: 'RESET'
  })
}

const closeModal = () => {
  document.getElementById('modal').classList.remove('is-active')
}

// close modal btn
document.getElementById('closeModal').addEventListener('click', closeModal)

document.getElementById('resetGameBtn').addEventListener('click', resetGame)
document.getElementById('playAgainBtn').addEventListener('click', () => {
  resetGame()
  closeModal()
})