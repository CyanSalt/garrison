export default {
  id: 619,
  name: 'Innervate',
  type: Types.spell,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.druid,
  collectible: true,
  cost: 0,
  targets(context) {
    return context.getAllCharacters();
  },
  async effect(context) {
    await context.player.dealDamageTo(context.target, 1);
  },
}
