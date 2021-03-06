import {Types, Sets, Rarities, Classes} from '@/core/game/constants'
import Keywords from '@/core/game/keywords'

export default {
  id: 238,
  name: 'Ironbark Protector',
  type: Types.minion,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.druid,
  collectible: true,
  cost: 8,
  attack: 8,
  health: 8,
  effects: [
    Keywords.taunt,
  ],
}
