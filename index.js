attackP1Btn = document.getElementById('attackPlayerOne')
attackP2Btn = document.getElementById('attackPlayerTwo')

const render = () => {
  document.getElementById('playerOneHealth').innerText = store.find(player => player.id === 1).health
  document.getElementById('playerTwoHealth').innerText = store.find(player => player.id === 2).health
  store.find(player => {
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

render() // initial render

// player 2 attacking player 1
attackP1Btn.addEventListener('click', () => {
  if (!attackP1Btn.getAttribute('disabled')) {
    attackPlayer(1)
  }
  render()
})

// player 1 attacking player 2
attackP2Btn.addEventListener('click', () => {
  if (!attackP2Btn.getAttribute('disabled')) {
    attackPlayer(2)
  }
  render()
})

// helper functions
const resetGame = () => {
  attackP1Btn.removeAttribute('disabled')
  attackP2Btn.removeAttribute('disabled')
  resetStore()
  render()
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