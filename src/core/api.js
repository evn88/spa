export class Api {
  constructor(config) {
    this.config = config || {}
  }


  async get(id) {
    this.getUrl = (id)
      ? `${this.config.url}/users/${id}`
      : `${this.config.url}/users/`
    console.log('url', this.getUrl);
    try {
      const response = await fetch(this.getUrl)
      const data = await response.json()
      return data
    } catch (err) {
      console.log(err)
    }
  }

  create(data) {
    return 'test create'
  }

  update(id, data) {
    return 'test edit'
  }

  delete(id) {
    return 'test del'
  }
}

