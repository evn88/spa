import { validate } from '@core/validator'
import { addEvent } from '@core/utils'
import { Api } from '@core/api'
import { template } from '@core/template'
import './scss/index.scss'

const form = document.querySelector('form')
const list = document.querySelector('.list')
const formName = document.getElementById('formName')
const formPhone = document.getElementById('formPhone')

const api = new Api({
  url: 'http://localhost:3000',
})

// получаем всех пользователей с сервера
const users = api.get()
users.then(user => {
  user.map(function(user) {
    // list.children.loader.style.display = 'none'
    list.insertAdjacentHTML(
        'beforeEnd',
        template(user.id, user.name, user.phone))
    addEvent(list.children)
  })
})

// обработка добавления записи
form.addEventListener('submit', function(e) {
  e.preventDefault()
  const idValue = 'id_' + new Date().getTime()

  const formNameErr = validate(
      formName,
      ['required', 'name']
  )
  const formPhoneErr = validate(
      formPhone,
      ['required', 'phone']
  )

  if (formNameErr && formPhoneErr) {
    list.insertAdjacentHTML(
        'beforeEnd',
        template(idValue, formName.value.trim(), formPhone.value.trim())
    )
    api.create({
      id: idValue,
      name: formName.value,
      phone: formPhone.value
    })
    addEvent(list.children)
    formName.value = formPhone.value = null // clean form
    formName.focus()
  }
})

// Обработка удаления
list.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    const item = e.target.closest('.list__item')
    api.delete(item.id)
    item.remove()
  }
  if (e.target.classList.contains('save')) {
    const item = e.target.closest('.list__item')
    api.update(item.id, {
      'name': item.getElementsByClassName('form-control')[0].innerText,
      'phone': item.getElementsByClassName('form-control')[1].innerText
    })
  }
})
