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
      return await data
    } catch (err) {
      console.error(err)
      return [{
        'id': 0,
        'name': '!!! Нет подключения к API, запустите сервер !!!',
        'phone': ''
      }]
    }
  }

  async create(data) {
    try {
      const response = await fetch(this.getUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      })
      const json = await response.json()
      console.log(json)
    } catch (err) {
      console.error(err)
    }
  }

  async update(id, data) {
    try {
      const response = await fetch(this.getUrl + '/' + id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      })
      const json = await response.json()
      console.log(json)
    } catch (err) {
      console.error(err)
    }
  }

  async delete(id) {
    try {
      await fetch(this.getUrl + '/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      })
    } catch (err) {
      console.error(err)
    }
  }
}

