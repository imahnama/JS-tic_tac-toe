import { gameLogic } from '../src/board';

beforeEach(() => {
  document.body.innerHTML = '<div>'
    + '  <button id="1" />'
    + '  <button id="2" />'
    + '  <button id="3" />'
    + '  <button id="4" />'
    + '</div>';
});

test('checks for X and O inputs', () => {
  expect(gameLogic.displayChip(1)).toEqual([1]);
  expect(gameLogic.displayChip(2)).toEqual([1, 2]);
  expect(gameLogic.displayChip(2)).not.toEqual([1, 2, 3]);
});

test('checks for X and O inputs', () => {
  expect(gameLogic.displayChip(3)).toEqual([1, 2, 3]);
  expect(gameLogic.displayChip(4)).toEqual([1, 2, 3, 4]);
  expect(gameLogic.displayChip(4)).not.toEqual([1, 2, 3]);
});
