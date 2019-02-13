import Player from './modules/player'
import Collection from './modules/collection'
import TheCoin from '@/core/entities/basic/the-coin'

export default class Game {

  constructor(deck1, deck2) {
    const player1 = new Player(deck1)
    const player2 = new Player(deck2)
    this.players = Player.match(player1, player2)
    this.turn = 0
  }

  async start() {
    this.firstPlayer = this.players[Math.floor(Math.random() * 2)]
    await Promise.all([
      this.firstPlayer.dealInitialHands(3),
      this.firstPlayer.opponent.dealInitialHands(4),
    ])
    this.firstPlayer.opponent.addCardToHand(TheCoin)
    this.startNextTurn()
  }

  startNextTurn() {
    if (!this.currentPlayer) {
      this.currentPlayer = this.firstPlayer
    } else {
      this.currentPlayer = this.currentPlayer.opponent
    }
    this.turn++
    this.currentPlayer.startTurn()
  }

  endThisTurn() {

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
