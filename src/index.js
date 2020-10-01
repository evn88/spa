import {validate} from '@core/validator'
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
const divItem = document.getElementsByClassName('item form-control')

for (let i = 0; i < divItem.length; i++) {
  const div = divItem[i]
  div.addEventListener('blur', function(e) {
    console.log(divItem[i].textContent)
  })
}

form.addEventListener('submit', function(e) {
  e.preventDefault()
  const idValue = 'id_' + new Date().getTime()
  /**
   * 1) forms array
   * 2) conditions array
   */
  const formNameErr = validate(
      ['formName', 'test'],
      ['required', 'name']
  )
  const formPhoneErr = validate(
      ['formPhone'],
      ['required', 'phone']
  )


  const listHTML =
`<div class="list__item" id="${idValue}">
   <div class="item item__name form-control" contenteditable>
      ${formName.value}
   </div>
   <div class="item item__phone form-control" contenteditable>
      ${formPhone.value}
   </div>

   <div class="item item__edit">
     <a href="#"><span class="material-icons save">save</span></a>
     <a href="#"><span class="material-icons delete">delete</span></a>
   </div>
 </div>`;


  console.log('err: ', formNameErr, formPhoneErr, idValue)

  if (formNameErr && formPhoneErr) {
    list.insertAdjacentHTML('beforeEnd', listHTML)
    formName.value = formPhone.value = null // clean form
    formName.focus()
  }
  // formName.value = formPhone.value = null // clean form
  // formName.focus()
})

// Обработка удаления

list.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    e.target.closest('.list__item').remove()
  }
})
