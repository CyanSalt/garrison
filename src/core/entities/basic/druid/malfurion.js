import {Types, Sets, Rarities, Classes} from '@/core/game/constants'

export const Shapeshift = {
  id: 185,
  name: 'Shapeshift',
  type: Types.heropower,
  cost: 2,
  async effect(context) {
    await context.player.gainHeroAttackThisTurn(1)
    await context.player.gainArmor(1)
  },
}

export default {
  id: 621,
  name: 'Malfurion Stormrage',
  type: Types.hero,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.druid,
  collectible: true,
  cost: 0,
  heropower: Shapeshift,
}
