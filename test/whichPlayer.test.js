import { displayBoard } from '../src/board';

test('keeps track of the played moves', () => {
  expect(displayBoard.whichPlayer(1)).toEqual([1]);
  expect(displayBoard.whichPlayer(2)).toEqual([1, 2]);
  expect(displayBoard.whichPlayer(4)).toEqual([1, 2, 4]);
  expect(displayBoard.whichPlayer(5)).not.toEqual([1, 2, 4]);
});