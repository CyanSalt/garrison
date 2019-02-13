import Collection from './collection'
import Entity from './entity'
import Hero from './hero'
import createParallel from './parallel'
import Emitter from './emitter'

export default class Player extends Emitter {

  constructor(deck) {
    super()
    this.hero = new Hero()
    this.heropower = null
    this.weapon = null
    this.deck = deck.map(card => new Entity(card))
    this.hands = []
    this.minions = []
    this.secrets = []
    this.dump = []
    this.mana = 0
    this.maxMana = 0
    this.armor = 0
    this.fatigue = 0
    this.initialDecision = createParallel()
    this.shuffleDeck()
  }

  static match(player1, player2) {
    player1.opponent = player2
    player2.opponent = player1
    return [player1, player2]
  }

  getAllCharacters() {
    return new Collection([this.hero, ...this.minions])
  }

  getAllMinions() {
    return new Collection(this.minions)
  }

  getHero() {
    return this.hero
  }

  getWeapon() {
    return this.weapon
  }

  getHeroPower() {
    return this.heropower
  }

  shuffleDeck() {
    const deck = [...this.deck]
    let i = deck.length
    // eslint-disable-next-line space-unary-ops, space-infix-ops
    while (i --> 0) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[deck[j], deck[i]] = [deck[i], deck[j]]
    }
    this.deck = deck
  }

  dealInitialHands(count) {
    this.hands = this.deck.slice(-count)
    this.deck = this.deck.slice(0, -count)
    return this.initialDecision.promise
  }

  decideInitialHands(changed) {
    const discarded = []
    for (const index of changed) {
      discarded.push(this.hands[index])
      this.hands[index] = this.deck.pop()
    }
    this.deck = this.deck.concat(discarded)
    this.shuffleDeck()
    this.initialDecision.resolve()
  }

  startTurn() {
    this.gainEmptyMana(1)
    this.refreshMana()
    this.drawCards(1)
  }

  refreshMana() {
    this.mana = this.maxMana
  }

  playCard(card, target) {

  }

  dealDamageTo(target, count) {

  }

  restoreHealthOf(target, count) {

  }

  summon(minion) {

  }

  equip(weapon) {

  }

  destroy(target) {

  }

  takeControl(target) {

  }

  returnToHand(target) {

  }

  transformInto(target, replacer) {

  }

  async drawCards(count) {
    for (let i = 0; i < count; ++i) {
      if (this.deck.length) {
        const card = this.deck.pop()
        await this.addCardToHand(card)
      } else {
        this.fatigue++
        await this.hero.takeDamage(this.fatigue)
      }
    }
  }

  discard(card) {

  }

  async addCardToHand(card) {
    if (!(card instanceof Entity)) {
      card = new Entity(card)
    }
    if (this.hands.length < 10) {
      this.hands.push(card)
    } else {
      this.dump.push(card)
    }
  }

  gainArmor(count) {
    this.armor += count
  }

  gainHeroAttackThisTurn(count) {

  }

  getMaxMana() {
    return this.maxMana
  }

  gainManaThisTurn(count) {
    this.mana += count
    if (this.mana > 10) {
      this.mana = 10
    }
  }

  gainEmptyMana(count) {
    this.maxMana += count
    if (this.maxMana > 10) {
      this.maxMana = 10
    }
  }

}
