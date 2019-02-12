import CharacterCollection from './character-collection'

export default class Player {

  constructor() {
    this.hero = null
    this.heropower = null
    this.weapon = null
    this.deck = []
    this.hand = []
    this.minions = []
    this.secrets = []
    this.mana = 0
    this.maxMana = 0
    this.armor = 0
  }

  static combine(player1, player2) {
    player1.opponent = player2
    player2.opponent = player1
    return [player1, player2]
  }

  whenever(event, handler) {

  }

  once(event, handler) {

  }

  getAllCharacters() {
    return new CharacterCollection([
      this.hero,
      ...this.minions,
    ])
  }

  getAllMinions() {
    return new CharacterCollection(this.minions)
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

  drawCards(count) {

  }

  discard(card) {

  }

  addCardToHand(card) {

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
