/* eslint-disable no-useless-escape */
export function validate(elements = [], conditions = []) {
  const err = {
    'phone': {
      'msg': 'Неверный формат номера телефона',
      'pattern': /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    },
    'name': {
      'msg': 'Введите Ваше реальное имя',
      'pattern': /^[a-zA-Zа-яА-Я]/
    },
    'required': {
      'msg': 'Поле не может быть пустым',
      'pattern': /\w|\b/g
    }
  }

  for (let i = 0; i < elements.length; i++) {
    const el = document.getElementById(elements[i])
    const errorForm = el.parentElement.getElementsByClassName('error')
    const input = el.value
    errorForm[0].style.display = 'none'

    if (input.length == 0) {
      errorForm[0].style.display = 'block'
      errorForm[0].innerText = err.required.msg
    }

    for (let i = 0; i < conditions.length; i++) {
      try {
        if (!err[conditions[i]]['pattern'].test(input)) {
          errorForm[0].style.display = 'block'
          errorForm[0].innerText = err[conditions[i]].msg
          return false
        }
      } catch (err) {
        console.error('error: can\'t find pattern in validator', err)
      }
    }

    return true
  }
}
