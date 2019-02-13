import {Types, Sets, Rarities, Classes} from '@/core/game/constants'

export const DaggerMastery = {
  id: 201,
  name: 'Dagger Mastery',
  type: Types.heropower,
  cost: 2,
  async effect(context) {
    await context.player.equip(WickedKnife)
  },
}

export const WickedKnife = {
  id: 183,
  name: 'Wicked Knife',
  type: Types.weapon,
  collectible: false,
  cost: 1,
  attack: 1,
  durability: 2,
}

export default {
  id: 2,
  name: 'Valeera Sanguiner',
  type: Types.hero,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.rogue,
  collectible: true,
  cost: 0,
  heropower: DaggerMastery,
}
