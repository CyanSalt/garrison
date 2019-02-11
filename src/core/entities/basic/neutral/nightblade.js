export const NightbladeBattleCry = {
  id: 560,
  name: 'Nightblade',
  type: Types.ability,
  async effect(context) {
    await context.self.dealDamageTo(context.player.opponent.getHero(), 3)
  },
}

export default {
  id: 560,
  name: 'Nightblade',
  type: Types.minion,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.neutral,
  collectible: true,
  cost: 5,
  attack: 4,
  health: 4,
  battlecry: NightbladeBattleCry,
}
