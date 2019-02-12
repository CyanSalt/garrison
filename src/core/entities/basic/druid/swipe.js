import {Types, Sets, Rarities, Classes} from '@/core/battle/constants'

export default {
  id: 620,
  name: 'Swipe',
  type: Types.spell,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.druid,
  collectible: true,
  cost: 4,
  targets(context) {
    return context.player.opponent.getAllCharacters()
  },
  async effect(context) {
    await context.player.dealDamageTo(context.target, 4)
    await context.player.dealDamageTo(
      context.player.opponent
        .getAllCharacters()
        .except(context.target),
      1
    )
  },
}
