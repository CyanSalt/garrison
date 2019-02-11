export const GurubashiBerserkerEffect = {
  id: 323,
  name: 'Gurubashi Berserker',
  type: Types.effect,
  effect(context) {
    context.self.gain(3, 0);
  },
}

export const GurubashiBerserkerBasicEffect = {
  id: 323,
  name: 'Gurubashi Berserker',
  type: Types.effect,
  effect(context) {
    context.self.whenever(Events.takedamage, (context) => {
      context.self.gainEffect(GurubashiBerserkerEffect)
    })
  },
}

export default {
  id: 323,
  name: 'Gurubashi Berserker',
  type: Types.minion,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.neutral,
  collectible: true,
  cost: 5,
  attack: 2,
  health: 7,
  effects: [
    GurubashiBerserkerBasicEffect,
  ],
}
