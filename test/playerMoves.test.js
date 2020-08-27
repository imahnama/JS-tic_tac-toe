import { displayBoard } from '../src/board';

beforeEach(() => {
  document.body.innerHTML = '<div>'
  + '  <div class="general-section" />'
  + '  <div class="display-board" />'
  + '</div>';
});

test('eliminates repetition of playing one(1) twice', () => {
  expect(displayBoard.playerMoves(1)).toBe(1);
  expect(displayBoard.playerMoves(1)).not.toBe(1);
  expect(displayBoard.playerMoves(1)).toBe('Pick another cell');
});

test('eliminates repetition of playing two(2) twice', () => {
  expect(displayBoard.playerMoves(2)).toBe(2);
  expect(displayBoard.playerMoves(2)).toBe('Pick another cell');
});