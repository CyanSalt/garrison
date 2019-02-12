import {Types, Sets, Rarities, Classes} from '@/core/battle/constants'
import Keywords from '@/core/battle/keywords'

export default {
  id: 27,
  name: 'Booty Bay Bodyguard',
  type: Types.minion,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.neutral,
  collectible: true,
  cost: 5,
  attack: 5,
  health: 4,
  effects: [
    Keywords.taunt,
  ],
}
