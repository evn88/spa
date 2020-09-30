import {validate} from '@core/validator'
// import {Connector} from '@core/Connector'
import './scss/index.scss'

// const api = new Connector({
//   url: 'https://dev.vershkoff.ru/api',
// })

// console.log(api)

const form = document.querySelector('form')
const list = document.querySelector('.list')


form.addEventListener('submit', function(e) {
  e.preventDefault();

  const formName = document.getElementById('formName')
  const formPhone = document.getElementById('formPhone')

  const formNameErr = validate(
      formName,
      ['required', 'string', 'min:3'],
      'errorMessage'
  )
  const formPhoneErr = validate(
      formPhone,
      ['required', 'phone'],
      'errorMessage'
  )

  const listHTML =
   `<div class="list__item">
      <div class="item item__name" contenteditable>${formName.value}</div>
      <div class="item item__phone" contenteditable>${formPhone.value}</div>
      <div class="item item__edit">
        <a href="#"><span class="material-icons save">save_alt</span></a>
        <a href="#"><span class="material-icons delete">delete</span></a>
      </div>
    </div>`;


  if (formNameErr || formPhoneErr) {
    // console.log('form: ', formName, formPhone)
    formName.value = formPhone.value = null // clean form
    formName.focus();
  }
})

// Обработка удаления

list.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    e.target.closest('.list__item').remove();
  }
})
