import {Types, Sets, Rarities, Classes} from '@/core/battle/constants'
import Entity from '@/core/battle/modules/entity'

export const FrostwolfBanner = {
  id: 604,
  name: 'Frostwolf Banner',
  type: Types.effect,
  async effect(context) {
    const count = context.args.count
    await context.self.gain(count, count)
  },
}

export const FrostwolfWarlordBattleCry = {
  id: 604,
  name: 'Frostwolf Warlord',
  type: Types.ability,
  async effect(context) {
    const count = context.player.getAllMinions().count()
    await context.self.gainEffect(
      new Entity(FrostwolfBanner, {count})
    )
  },
}

export default {
  id: 604,
  name: 'Frostwolf Warlord',
  type: Types.minion,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.neutral,
  collectible: true,
  cost: 5,
  attack: 4,
  health: 4,
  battlecry: FrostwolfWarlordBattleCry,
}
