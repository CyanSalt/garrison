export default class Collection {

  constructor(items) {
    this.items = items
  }

  count() {
    return this.items.length
  }

  except(items) {
    return new Collection(
      this.items.filter(item => item !== items)
    )
  }

  async map(callback) {
    return Promise.all(this.items.map(callback))
  }

  [Symbol.iterator]() {
    return this.items[Symbol.iterator]()
  }

}
