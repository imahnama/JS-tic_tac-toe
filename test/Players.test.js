import Players from '../src/index'

test('it takes two players', ()  => {
  expect(Players(playerOne = 'Nama', playerTwo = 'Imah')).toBe({playerOne, playerTwo})
})
