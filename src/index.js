import domContent from './dom';
import { displayBoard, gameLogic, gameBoard } from './board';

const domContentInstance = domContent();
domContentInstance.boardMethod();

const Players = () => domContentInstance.playerDomContent();

const acceptInput = (value) => {
  displayBoard.playerMoves(value);
  gameLogic.displayChip(value);
};

const endGame = () => {
  window.location.reload();
};

domContentInstance.getElements();

export {
  acceptInput, Players, endGame,
};
