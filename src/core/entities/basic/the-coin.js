import {Types, Sets, Rarities, Classes} from '@/core/game/constants'

export default {
  id: 141,
  name: 'The Coin',
  type: Types.spell,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.neutral,
  collectible: false,
  cost: 0,
  async effect(context) {
    await context.player.gainManaThisTurn(1)
  },
}
