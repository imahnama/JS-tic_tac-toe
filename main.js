
let gameBoard = []

const displayBoard = (() => {
    let playerOneMoves = []
  let playerTwoMoves = []
  let winArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
             [1, 4, 7], [2, 5, 8], [3, 6, 9],
             [1, 5, 9], [3, 5, 7]]

  const playerMoves = (move) => {
    let alertMsg = "Pick another cell"
    if (gameBoard.includes(move) ) {
      document.getElementById('alert-msg').innerHTML = alertMsg
    }
    else {
      gameBoard.push(move)
      whichPlayer(move)
    }
  }

  const whichPlayer = (player) => {

    if (gameBoard.length % 2 === 0) {
      playerTwoMoves.push(player)
      winner(playerTwoMoves)
    }

    else if (gameBoard.length % 2 !== 0) {
      playerOneMoves.push(player)
      winner(playerOneMoves)
    }

  }

 const winner = (value) => {
  const moves = [...value];
  const sampleArray = [];
  winArray.map(element => {
  const res = element.every((item) => moves.indexOf(item) !== -1);
   sampleArray.push(res);
      if (sampleArray.includes(true)) {
           console.log("Yeah you win!")
         }
      else if (!sampleArray.includes(true) && gameBoard.length === 9 ){

        console.log("It's a draw! Try again?")
      }
       });
    }

  return {
    playerMoves
  }
})();

const acceptInput = (value) => {
  displayBoard.playerMoves(value)
  gameLogic.displayChip(value)  
}

const Players = () => {
  console.log("Testing players button")
  let playerOne = document.getElementById('player-one-input').value;
  let playerTwo = document.getElementById('player-two-input').value;
  if(playerOne && playerTwo){
    document.querySelector(".players-form").classList.add("hide-players");
    document.querySelector(".general-section").classList.remove("hide-section");
    document.querySelector(".first-player-name").innerHTML = playerOne;
    document.querySelector(".second-player-name").innerHTML = playerTwo;
  }
};

const gameLogic = (() => {

  let newArr = []

  const displayChip = (value) => {
    let chipOne = "X";
    let chipTwo = "O";
    if((gameBoard.length % 2 === 0) && !(newArr.includes(value))){
      newArr.push(value)
      document.getElementById(value).innerHTML = chipOne
      console.log(chipTwo)
    } else if((gameBoard.length % 2 !== 0) && !(newArr.includes(value))){
    newArr.push(value)
      document.getElementById(value).innerHTML = chipTwo
      console.log(chipOne)
    }
  }

  return {
    displayChip
  }

})();

document.getElementById("add-players-btn").addEventListener("click", Players)