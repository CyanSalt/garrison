import Player from './modules/player'
import Collection from './modules/collection'

export default class Battle {

  constructor(deck1, deck2) {
    const player1 = new Player(deck1)
    const player2 = new Player(deck2)
    this.players = Player.match(player1, player2)
    this.firstPlayer = this.players[Math.floor(Math.random() * 2)]
    this.firstPlayer.dealInitialHands(3)
    this.firstPlayer.opponent.dealInitialHands(4)
    // this.currentPlayer = null
  }

  getAllCharacters() {
    return new Collection([
      ...this.players.map(player => player.getHero()),
      ...this.getAllMinions(),
    ])
  }

  getAllMinions() {
    return new Collection(
      this.players.map(player => player.getAllMinions())
        .reduce((a, b) => [...a, ...b])
    )
  }

}
