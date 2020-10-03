import { validate } from '@core/validator'
import { addEvent } from '@core/utils'
// import {Connector} from '@core/Connector'
import './scss/index.scss'

// const api = new Connector({
//   url: 'https://dev.vershkoff.ru/api',
// })

// console.log(api)

const form = document.querySelector('form')
const list = document.querySelector('.list')
const formName = document.getElementById('formName')
const formPhone = document.getElementById('formPhone')

addEvent(list.children)

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

  const listHTML =
    `<div class="list__item" id="${idValue}">
      <div class="item item__name">
        <div class="item form-control" contenteditable>
           ${formName.value.trim()}
        </div>
        <span class="error"></span>
      </div>

      <div class="item item__name">
        <div class="item form-control" contenteditable>
          ${formPhone.value.trim()}
        </div>
        <span class="error"></span>
      </div>

      <div class="item item__edit">
        <a href="#"><span class="material-icons save">save</span></a>
        <a href="#"><span class="material-icons delete">delete</span></a>
      </div>
    </div>`;


  console.log('err: ', formNameErr, formPhoneErr, idValue)

  if (formNameErr && formPhoneErr) {
    list.insertAdjacentHTML('beforeEnd', listHTML)
    addEvent(list.children)
    formName.value = formPhone.value = null // clean form
    formName.focus()
  }
})

// Обработка удаления

list.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    e.target.closest('.list__item').remove()
  }
})
