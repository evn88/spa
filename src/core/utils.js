import { validate } from '@core/validator'

export function addEvent(elements) {
  for (const div of elements) {
    const divName = div.getElementsByClassName('form-control')[0]
    const divPhone = div.getElementsByClassName('form-control')[1]

    divName.addEventListener('blur', (e) => {
      validate(e.target, ['required', 'name'])
    })
    divPhone.addEventListener('blur', (e) => {
      validate(e.target, ['required', 'phone'])
    })
  }
}
