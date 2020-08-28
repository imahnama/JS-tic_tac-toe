import { restartButton } from '../src/board';

beforeEach(() => {
  document.body.innerHTML = '<div>'
    + '  <div class="main-restart" />'
    + '  <button id="1" />'
    + '  <button id="2" />'
    + '  <button id="3" />'
    + '  <button id="4" />'
    + '  <button id="5" />'
    + '  <button id="6" />'
    + '  <button id="8" />'
    + '  <button id="9" />'
    + '  <button id="7" />'
    + '</div>';
});
test('resets the values of the arrays', () => {
  expect(restartButton()).toEqual({
    gameBoard: [],
    playerOneMoves: [],
    playerTwoMoves: [],
    newArr: [],
  });
});
test('resets the values of the arrays', () => {
  expect(restartButton()).not.toEqual({
    gameBoard: [],
    playerOneMoves: [1],
    playerTwoMoves: [],
    newArr: [],
  });
});
test('resets the values of the arrays', () => {
  expect(restartButton()).not.toEqual({
    gameBoard: [1],
    playerOneMoves: [],
    playerTwoMoves: [],
    newArr: [],
  });
});
