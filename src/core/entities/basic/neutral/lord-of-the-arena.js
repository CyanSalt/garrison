import {Types, Sets, Rarities, Classes} from '@/core/game/constants'
import Keywords from '@/core/game/keywords'

export default {
  id: 414,
  name: 'Lord of the Arena',
  type: Types.minion,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.neutral,
  collectible: true,
  cost: 6,
  attack: 6,
  health: 5,
  effects: [
    Keywords.taunt,
  ],
}
