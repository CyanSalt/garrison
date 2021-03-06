import {Types, Sets, Rarities, Classes} from '@/core/game/constants'
import Keywords from '@/core/game/keywords'
import Entity from '@/core/game/entity'

export default {
  id: 545,
  name: 'Archmage',
  type: Types.minion,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.neutral,
  collectible: true,
  cost: 6,
  attack: 4,
  health: 7,
  effects: [
    new Entity(Keywords.spellDamage, {count: 1}),
  ],
}
