export default {
  id: 532,
  name: 'Claw',
  type: Types.spell,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.druid,
  collectible: true,
  cost: 1,
  async effect(context) {
    await context.player.gainHeroAttackThisTurn(2);
    await context.player.gainArmor(2);
  },
}
