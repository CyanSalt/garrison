import {Types, Sets, Rarities, Classes} from '@/core/game/constants'

export const SteadyShot = {
  id: 481,
  name: 'Steady Shot',
  type: Types.heropower,
  cost: 2,
  async effect(context) {
    await context.player.dealDamageTo(context.player.opponent.getHero(), 2)
  },
}

export default {
  id: 484,
  name: 'Rexxar',
  type: Types.hero,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.hunter,
  collectible: true,
  cost: 0,
  heropower: SteadyShot,
}
