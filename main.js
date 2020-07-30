const displayBoard = (() => {
  let gameBoard = []

  const playerMoves = (move) => {
    console.log(move, 'hi')
  }

  return {
    playerMoves
  }


})();



const acceptInput = (value) => {
  displayBoard.playerMoves(value)
}

const Players = () => {

};

const gameLogic = (() => {

})();

document.getElementById('button-1').addEventListener('click', acceptInput(1))
document.getElementById('button-2').addEventListener('click', acceptInput(2))
document.getElementById('button-3').addEventListener('click', acceptInput(3))
document.getElementById('button-4').addEventListener('click', acceptInput(4))
document.getElementById('button-5').addEventListener('click', acceptInput(5))
document.getElementById('button-6').addEventListener('click', acceptInput(6))
document.getElementById('button-7').addEventListener('click', acceptInput(7))
document.getElementById('button-8').addEventListener('click', acceptInput(8))
document.getElementById('button-9').addEventListener('click', acceptInput(9))
