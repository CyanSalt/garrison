import {Types, Sets, Rarities, Classes} from '@/core/game/constants'

export const Reinforce = {
  id: 248,
  name: 'Reinforce',
  type: Types.heropower,
  cost: 2,
  async effect(context) {
    await context.player.summon(SilverHandRecruit)
  },
}

export const SilverHandRecruit = {
  id: 268,
  name: 'Silver Hand Recruit',
  type: Types.minion,
  collectible: false,
  cost: 1,
  attack: 1,
  health: 1,
}

export default {
  id: 257,
  name: 'Uther Lightbringer',
  type: Types.hero,
  set: Sets.basic,
  rarity: Rarities.free,
  class: Classes.paladin,
  collectible: true,
  cost: 0,
  heropower: Reinforce,
}
