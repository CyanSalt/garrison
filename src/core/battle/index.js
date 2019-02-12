import Player from './modules/player'
import CharacterCollection from './modules/character-collection'

export default class Battle {

  constructor() {
    const player1 = new Player()
    const player2 = new Player()
    this.players = Player.combine(player1, player2)
  }

  getAllCharacters() {
    return new CharacterCollection([
      ...this.players.map(player => player.getHero()),
      ...this.getAllMinions(),
    ])
  }

  getAllMinions() {
    return new CharacterCollection(
      this.players.map(player => player.getAllMinions())
        .reduce((a, b) => [...a, ...b])
    )
  }

}
