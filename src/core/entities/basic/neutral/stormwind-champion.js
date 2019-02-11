export const StormwindChampionEffect = {
  id: 310,
  name: 'Stormwind Champion Effect',
  type: Types.effect,
  effect(context) {
    context.player.getAllMinions()
      .except(context.self)
      .map(character => character.gainAura(StormwindChampionAura));
  },
}

export const StormwindChampionAura = {
  id: 310,
  name: 'Stormwind Champion Aura',
  type: Types.aura,
  effect(context) {
    context.self.gain(1, 1);
  },
}

export default {
  id: 310,
  name: 'Stormwind Champion',
  type: Types.minion,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.neutral,
  collectible: true,
  cost: 7,
  attack: 6,
  health: 6,
  effects: [
    StormwindChampionEffect,
  ],
}
