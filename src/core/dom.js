class Dom {
  constructor(selector) {
    console.log(selector)
    this.$el = (typeof selector === 'string')
      ? document.querySelector(selector)
      : selector
  }

  render() {
    return 'test'
  }

  data() {
    return {
      data: [
        {
          name: 'Egor',
          phone: '89377382158'
        },
        {
          name: 'Anna',
          phone: '89370843451'
        }
      ]
    }
  }
}

export function $(selector) {
  return new Dom(selector)
}
