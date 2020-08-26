import domContent from './dom'

let domContentInstance = domContent()
domContentInstance.boardMethod()

let gameBoard = [];
const playersArray = [];
let playerOneMoves = [];
let playerTwoMoves = [];
let newArr = [];

const Players = () => {
  const playerOne = document.getElementById('player-one-input').value;
  const playerTwo = document.getElementById('player-two-input').value;
  playersArray.push(playerOne);
  playersArray.push(playerTwo);
  if (playerOne && playerTwo) {
    document.querySelector('.players-form').classList.add('hide-players');
    document.querySelector('.general-section').classList.remove('hide-section');
    document.querySelector('.first-player-name').innerHTML = playerOne;
    document.querySelector('.second-player-name').innerHTML = playerTwo;
  }
  return {playerOne, playerTwo}
};

const displayBoard = (() => {
  const winArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]];

  const winner = (value, player) => {
    const moves = [...value];
    const sampleArray = [];
    winArray.map(element => {
      const res = element.every((item) => moves.indexOf(item) !== -1);
      sampleArray.push(res);
      if (sampleArray.includes(true)) {
        domContentInstance.showAlert(`${player} has won the game!`,
          'alert alert-success col-md-6 mx-auto mt-4');
        setTimeout(() => {
          document.querySelector('.main-restart').classList.remove('hide-buttons');
        }, 2000);
      } else if (!sampleArray.includes(true) && gameBoard.length === 9) {
        domContentInstance.showAlert("It's a draw! Try again?",
          'alert alert-warning col-md-6 mx-auto mt-4');
        setTimeout(() => {
          document.querySelector('.main-restart').classList.remove('hide-buttons');
        }, 2000);
      }
    });
  };

  const whichPlayer = (player) => {
    const firstPlayer = playersArray[0];
    const secondPlayer = playersArray[1];

    if (gameBoard.length % 2 === 0) {
      playerTwoMoves.push(player);
      winner(playerTwoMoves, secondPlayer);
    } else if (gameBoard.length % 2 !== 0) {
      playerOneMoves.push(player);
      winner(playerOneMoves, firstPlayer);
    }
  };

  const playerMoves = (move) => {
    const alertMsg = 'Pick another cell';
    if (gameBoard.includes(move)) {
      document.getElementById('alert-msg').innerHTML = alertMsg;
    } else {
      gameBoard.push(move);
      whichPlayer(move);
    }
  };
  return {
    playerMoves,
  };
})();

const gameLogic = (() => {
  const displayChip = (value) => {
    const chipOne = 'X';
    const chipTwo = 'O';
    if ((gameBoard.length % 2 === 0) && !(newArr.includes(value))) {
      newArr.push(value);
      document.getElementById(value).innerHTML = chipOne;
    } else if ((gameBoard.length % 2 !== 0) && !(newArr.includes(value))) {
      newArr.push(value);
      document.getElementById(value).innerHTML = chipTwo;
    }
  };

  return {
    displayChip,
  };
})();

const acceptInput = (value) => {
  displayBoard.playerMoves(value);
  gameLogic.displayChip(value);

  console.log(val)
};

const restartButton = () => {
  gameBoard = [];
  playerOneMoves = [];
  playerTwoMoves = [];
  newArr = [];
  for (let i = 1; i <= 9; i += 1) {
    document.getElementById(`${i}`).innerHTML = ' ';
  }
  document.querySelector('.main-restart').classList.add('hide-buttons');
};

const endGame = () => {
  window.location.reload();
};

document.getElementById('add-players-btn').addEventListener('click', Players);
document.getElementById('restart-button').addEventListener('click', restartButton);
document.getElementById('end-game-button').addEventListener('click', endGame);

export { acceptInput, displayBoard, Players, gameLogic, restartButton, endGame }
