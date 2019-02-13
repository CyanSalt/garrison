import {Types, Sets, Rarities, Classes} from '@/core/game/constants'

export default {
  id: 667,
  name: 'Starfire',
  type: Types.spell,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.druid,
  collectible: true,
  cost: 6,
  targets(context) {
    return context.game.getAllCharacters()
  },
  async effect(context) {
    await context.player.dealDamageTo(context.target, 5)
    await context.player.drawCards(1)
  },
}
