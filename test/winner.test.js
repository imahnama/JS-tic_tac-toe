import { displayBoard } from '../src/board';

beforeEach(() => {
  document.body.innerHTML = '<div>'
+ '  <div class="general-section" />'
+ '  <div class="display-board" />'
+ '</div>';
});

const player = 'Alican';
const move = [1, 2, 4, 3];

test('it determines win scenario', () => {
  expect(displayBoard.winner(move, player)).toEqual(
    [true, false, false, false, false, false, false, false],
  );
  expect(displayBoard.winner(move, player)).not.toEqual(
    [false, false, false, false, false, false, false, false],
  );
});

test('it determines win scenario', () => {
  expect(displayBoard.winner(move, player)).toEqual(
    [true, false, false, false, false, false, false, false],
  );
});
