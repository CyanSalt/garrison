import {Types, Sets, Rarities, Classes} from '@/core/game/constants'

export const DarkscaleHealerBattleCry = {
  id: 84,
  name: 'Darkscale Healer',
  type: Types.ability,
  async effect(context) {
    await context.player
      .restoreHealthTo(context.player.getAllCharacters(), 2)
  },
}

export default {
  id: 84,
  name: 'Darkscale Healer',
  type: Types.minion,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.neutral,
  collectible: true,
  cost: 5,
  attack: 4,
  health: 5,
  battlecry: DarkscaleHealerBattleCry,
}
