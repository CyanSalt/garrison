import {Types, Sets, Rarities, Classes} from '@/core/battle/constants'

export const ExcessMana = {
  id: 520,
  name: 'Excess Mana',
  type: Types.spell,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.druid,
  collectible: false,
  cost: 0,
  async effect(context) {
    await context.player.drawCards(1)
  },
}

export default {
  id: 282,
  name: 'Wild Growth',
  type: Types.spell,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.druid,
  collectible: true,
  cost: 3,
  async effect(context) {
    if (context.player.getMaxMana() === 10) {
      await context.player.addCardToHand(ExcessMana)
    } else {
      await context.player.gainEmptyMana(1)
    }
  },
}
