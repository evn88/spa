/* eslint-disable no-useless-escape */

/** Validation Function
 * @param  {array} elements
 * @param  {array} rules
 * @return {boolean}
 */

export function validate(elements, rules = []) {
  const err = {
    'phone': {
      'msg': 'Неверный формат номера телефона',
      'pattern': /^([+]?[0-9\s-\(\)]{3,25})*$/i
    },
    'name': {
      'msg': 'Введите Ваше реальное имя',
      'pattern': /[\wа-яА-ЯЁё]{2,20}/ug,
    },
    'required': {
      'msg': 'Поле не может быть пустым',
      'pattern': /[\wа-яА-ЯЁё]|\b/ug
    }
  }

  const input = (elements.tagName === 'INPUT')
  ? elements.value
  : elements.innerText

  const errorForm = elements.parentElement.getElementsByClassName('error')
  errorForm[0].style.display = 'none'

  console.log('length ', input.length)
  if (input == 0) {
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
