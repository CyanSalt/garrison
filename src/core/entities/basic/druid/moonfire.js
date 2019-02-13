import {Types, Sets, Rarities, Classes} from '@/core/game/constants'

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
    return context.game.getAllCharacters()
  },
  async effect(context) {
    await context.player.dealDamageTo(context.target, 1)
  },
}
