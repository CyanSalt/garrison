export default {
  id: 545,
  name: 'Archmage',
  type: Types.minion,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.neutral,
  collectible: true,
  cost: 6,
  attack: 4,
  health: 7,
  effects: [
    extendEffect(Keywords.spellDamage, {count: 1}),
  ],
}
