export const FrostwolfWarlordEffect = {
  id: 604,
  name: 'Frostwolf Warlord',
  type: Types.effect,
  async effect(context) {
    const count = context.args.count;
    await context.self.gain(count, count);
  },
}

export const FrostwolfWarlordBattleCry = {
  id: 604,
  name: 'Frostwolf Warlord',
  type: Types.ability,
  async effect(context) {
    await context.self.gainEffect(
      extendEffect(FrostwolfWarlordEffect, {count})
    );
  },
}

export default {
  id: 604,
  name: 'Frostwolf Warlord',
  type: Types.minion,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.neutral,
  collectible: true,
  cost: 5,
  attack: 4,
  health: 4,
  battlecry: FrostwolfWarlordBattleCry,
}
