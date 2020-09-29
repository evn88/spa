class Connector {
  constructor(config) {
    this.config = config || {}
  }

  get() {
    return 'test get'
  }

  create() {
    return 'test create'
  }

  edit() {
    return 'test edit'
  }

  delete() {
    return 'test del'
  }
}

export function $(config) {
  return new Connector(config)
}
