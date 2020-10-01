/* eslint-disable no-useless-escape */

/** Validation Function
 * @param  {array} elements
 * @param  {array} rules
 * @return {boolean}
 */

export function validate(elements = [], rules = []) {
  const err = {
    'phone': {
      'msg': 'Неверный формат номера телефона',
      'pattern': /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    },
    'name': {
      'msg': 'Введите Ваше реальное имя',
      /* TODO Не проверяет Cyrillic */
      'pattern': /[\wа-яА-ЯЁё]+/gi,
    },
    'required': {
      'msg': 'Поле не может быть пустым',
      'pattern': /\w|\b/g
    }
  }

  for (let i = 0; i < elements.length; i++) {
    const el = document.getElementById(elements[i])
    const errorForm = el.parentElement.getElementsByClassName('error')
    const input = String(el.value)
    errorForm[0].style.display = 'none'

    console.log('length ', input)
    if (input.length == 0) {
      errorForm[0].style.display = 'block'
      errorForm[0].innerText = err.required.msg
    }

    for (let i = 0; i < rules.length; i++) {
      try {
        if (!err[rules[i]].pattern.test(input)) {
          errorForm[0].style.display = 'block'
          errorForm[0].innerText = err[rules[i]].msg
          return false
        }
      } catch (err) {
        console.error('error: can\'t find pattern in validator', err)
      }
    }

    return true
  }
}
