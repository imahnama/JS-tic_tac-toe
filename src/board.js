/* eslint-disable consistent-return */
/* eslint-disable no-unreachable */
/* eslint-disable import/no-mutable-exports */

import alert from './alert';

const alertInstance = alert();

let gameBoard = [];
const playersArray = [];
let playerOneMoves = [];
let playerTwoMoves = [];
let newArr = [];

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
        alertInstance.showAlert(`${player} has won the game!`,
          'alert alert-success col-md-6 mx-auto mt-4');
        alertInstance.timeOut();
      } else if (!sampleArray.includes(true) && gameBoard.length === 9) {
        alertInstance.showAlert("It's a draw! Try again?",
          'alert alert-warning col-md-6 mx-auto mt-4');
        alertInstance.timeOut();
      }
    });
    return sampleArray;
  };

  const whichPlayer = (player) => {
    const firstPlayer = playersArray[0];
    const secondPlayer = playersArray[1];

    if (gameBoard.length % 2 === 0) {
      playerTwoMoves.push(player);
      winner(playerTwoMoves, secondPlayer);

      return playerTwoMoves;
    } if (gameBoard.length % 2 !== 0) {
      playerOneMoves.push(player);
      winner(playerOneMoves, firstPlayer);

      return playerOneMoves;
    }
  };

  const playerMoves = (move) => {
    const alertMsg = 'Pick another cell';
    if (gameBoard.includes(move)) {
      alertInstance.showAlert(alertMsg,
        'alert alert-warning col-md-6 mx-auto mt-4');
      return alertMsg;
    }
    gameBoard.push(move);
    whichPlayer(move);
    return move;
  };
  return {
    playerMoves, winner, whichPlayer,
  };
})();

const gameLogic = (() => {
  const displayChip = (value) => {
    const chipOne = 'X';
    const chipTwo = 'O';
    if ((gameBoard.length % 2 === 0) && !(newArr.includes(value))) {
      newArr.push(value);
      return newArr;
      document.getElementById(value).innerHTML = chipOne;
    } if ((gameBoard.length % 2 !== 0) && !(newArr.includes(value))) {
      newArr.push(value);
      return newArr;
      document.getElementById(value).innerHTML = chipTwo;
    }
  };

  return {
    displayChip,
  };
})();

const restartButton = () => {
  gameBoard = [];
  playerOneMoves = [];
  playerTwoMoves = [];
  newArr = [];
  for (let i = 1; i <= 9; i += 1) {
    document.getElementById(`${i}`).innerHTML = ' ';
  }
  document.querySelector('.main-restart').classList.add('hide-buttons');
  return {
    gameBoard,
    playerOneMoves,
    playerTwoMoves,
    newArr,
  };
};

export {
  displayBoard, playersArray, gameLogic, gameBoard, restartButton,
};
