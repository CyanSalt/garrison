import {Types, Sets, Rarities, Classes} from '@/core/battle/constants'
import Keywords from '@/core/battle/keywords'

export const MarkOfTheWildEffect = {
  id: 480,
  name: 'Mark of the Wild',
  type: Types.effect,
  effect(context) {
    context.self.gain(2, 2)
    context.self.gainEffect(Keywords.taunt)
  },
}

export default {
  id: 480,
  name: 'Mark of the Wild',
  type: Types.spell,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.druid,
  collectible: true,
  cost: 3,
  async effect(context) {
    await context.target.gainEffect(MarkOfTheWildEffect)
  },
}
