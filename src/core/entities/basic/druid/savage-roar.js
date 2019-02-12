import {Types, Sets, Rarities, Classes} from '@/core/battle/constants'

export const SavageRoarEffect = {
  id: 329,
  name: 'Savage Roar',
  type: Types.effect,
  effect(context) {
    return context.self.gain(2, 0)
  },
}

export default {
  id: 329,
  name: 'Savage Roar',
  type: Types.spell,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.druid,
  collectible: true,
  cost: 3,
  async effect(context) {
    await context.player.getAllCharacters()
      .map(character => character.gainEffectThisTurn(SavageRoarEffect))
  },
}
