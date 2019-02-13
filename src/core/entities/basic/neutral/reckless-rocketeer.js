import {Types, Sets, Rarities, Classes} from '@/core/game/constants'
import Keywords from '@/core/game/keywords'

export default {
  id: 560,
  name: 'Reckless Rocketeer',
  type: Types.minion,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.neutral,
  collectible: true,
  cost: 6,
  attack: 5,
  health: 2,
  effects: [
    Keywords.charge,
  ],
}
