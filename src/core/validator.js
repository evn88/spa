/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
export function validate(element, options, form) {
  /**
  ** string, number, phone, email
   */
  const el = element.value
  const errorForm = document.getElementById(form)
  const errorList = document.getElementById('errorList')
  const errorMessages = []
  let rgxTemplate = new RegExp()

  if (!el) {
    errorMessages.push('Необходимо заполнить поле')
    return false
  }

  if (Array.isArray(options)) {
    options.forEach(o => {
      if (o === 'phone') {
        rgxTemplate = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        errorMessages.push('Неверный формат номера телефона')
      }
      if (o === 'string') {
        rgxTemplate = /^[a-zA-Zа-яА-Я]/;
        errorMessages.push('Допустим ввод только текста')
      }
      if (o === 'email') {
        rgxTemplate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        errorMessages.push('Неверный формат e-mail')
      }
    })

    if (rgxTemplate.test(String(el))) {
      errorForm.style.display = 'none'
      return true
    } else {
      errorForm.style.display = 'block'

      const li = document.createElement('li')

      console.log(errorList.children)
      errorMessages.forEach(error => {
        li.innerText = error
        errorList.append(li)
      })
      return false
    }
  } else {
    console.error('options is not an Array')
  }
}
