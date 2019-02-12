export default class CharacterCollection {

  constructor(characters) {
    this.characters = characters
  }

  count() {
    return this.characters.length
  }

  except(character) {
    return new CharacterCollection(
      this.characters.filter(item => item !== character)
    )
  }

  async map(callback) {
    return Promise.all(this.characters.map(callback))
  }

  [Symbol.iterator]() {
    return this.characters[Symbol.iterator]()
  }

}
