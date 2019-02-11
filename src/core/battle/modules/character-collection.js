export default class CharacterCollection {

  constructor(characters) {
    this.characters = characters;
  }

  except(character) {
    return new CharacterCollection(
      this.characters.filter(item => item !== character)
    );
  }

  async map(callback) {
    return Promise.all(this.characters.map(callback))
  }

}
