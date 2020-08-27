import { Players, endGame, acceptInput } from './index';
import { restartButton, playersArray } from './board';

const domContent = () => {
  const boardMethod = () => {
    const boardSection = document.getElementById('display-board-section');
    const buttonsArr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
      { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }];

    for (let i = 0; i < buttonsArr.length; i += 1) {
      const boardCellDiv = document.createElement('div');
      boardCellDiv.setAttribute('class', 'board-cell');

      const boardCellButton = document.createElement('button');
      boardCellButton.setAttribute('id', buttonsArr[i].id);

      boardSection.appendChild(boardCellDiv);
      boardCellDiv.appendChild(boardCellButton);

      boardCellButton.addEventListener('click', () => {
        acceptInput(buttonsArr[i].id);
      });
    }
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
    return { playerOne, playerTwo };
  };

  const getElements = () => {
    document.getElementById('add-players-btn').addEventListener('click', Players);
    document.getElementById('restart-button').addEventListener('click', restartButton);
    document.getElementById('end-game-button').addEventListener('click', endGame);
  };

  return { boardMethod, playerDomContent, getElements };
};

export default domContent;
