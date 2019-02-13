export default class Emitter {

  constructor() {
    this.handlers = {}
  }

  whenever(event, handler) {
    if (!this.handlers[event]) {
      this.handlers[event] = []
    }
    this.handlers[event].push(handler)
  }

  once(event, handler) {
    if (!this.handlers[event]) {
      this.handlers[event] = []
    }
    const callback = async (...args) => {
      await handler(...args)
      const handlers = this.handlers[event]
      const index = handlers.indexOf(callback)
      if (index !== -1) {
        handlers.splice(index, 1)
      }
    }
    this.handlers[event].push(callback)
  }

  async happen(event, ...args) {
    const handlers = this.handlers[event]
    for (const handler of handlers) {
      await handler(...args)
    }
  }
}
