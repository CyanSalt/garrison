import {Types, Sets, Rarities, Classes} from '@/core/game/constants'

export default {
  id: 548,
  name: 'Innervate',
  type: Types.spell,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.druid,
  collectible: true,
  cost: 0,
  async effect(context) {
    await context.player.gainManaThisTurn(1)
  },
}
