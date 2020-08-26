import {acceptInput, playersArray, restartButton, Players, endGame} from './index'

const domContent = () => {

  const boardMethod = () => {
  const boardSection = document.getElementById('display-board-section')
  let buttonsArr = [{ id: 1}, { id: 2}, { id: 3}, {id: 4},
     { id: 5}, { id: 6}, { id: 7}, { id: 8}, {id: 9}]

     for (let i = 0; i < buttonsArr.length; i++) {
       const boardCellDiv = document.createElement('div')
       boardCellDiv.setAttribute('class', 'board-cell')

       const boardCellButton = document.createElement('button')
       boardCellButton.setAttribute('id', buttonsArr[i].id)

       boardSection.appendChild(boardCellDiv)
       boardCellDiv.appendChild(boardCellButton)

       boardCellButton.addEventListener('click', () => {
         acceptInput(buttonsArr[i].id)
       })

     }
  }

     const clearAlert = () => {
       const currentAlert = document.querySelector('.alert');
       if (currentAlert) {
         currentAlert.remove();
       }
     };

     const showAlert = (massage, className) => {
       clearAlert();
       const div = document.createElement('div');
       div.className = className;
       div.appendChild(document.createTextNode(massage));
       const mainSection = document.querySelector('.general-section');
       const board = document.querySelector('.display-board');
       mainSection.insertBefore(div, board);
       setTimeout(() => {
         clearAlert();
       }, 2000);
     };

     const playerDomContent = () => {
       
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
     }

     const timeOut = () => {
      setTimeout(() => {
        document.querySelector('.main-restart').classList.remove('hide-buttons');
      }, 2000);
     }

     const getElements = () => {
      document.getElementById('add-players-btn').addEventListener('click', Players);
      document.getElementById('restart-button').addEventListener('click', restartButton);
      document.getElementById('end-game-button').addEventListener('click', endGame);
     }

     return {boardMethod, showAlert, playerDomContent, timeOut, getElements}

}

export default domContent
