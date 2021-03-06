import {Types, Sets, Rarities, Classes} from '@/core/game/constants'

export default {
  id: 258,
  name: 'Healing Touch',
  type: Types.spell,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.druid,
  collectible: true,
  cost: 3,
  targets(context) {
    return context.game.getAllCharacters()
  },
  async effect(context) {
    await context.player.restoreHealthOf(context.target, 8)
  },
}
