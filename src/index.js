// import {$} from '@core/dom'
import './scss/index.scss'

const form = document.querySelector('form')
const list = document.querySelector('.list')
// button.submit = handleButtonClick

// function handleButtonClick() {
//   const formName = document.getElementById('formName')
//   const formPhone = document.getElementById('formPhone')

//   console.log('formName', formName.value)
//   console.log('formPhone', formPhone.value)

//   formName.value = formPhone.value = ''
// }

// console.log(list)
// for (const item of list) {
//   console.log(
//       item
//   )
// }
// for(let i = 0; i < lis)

// Обработка формы

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const formName = document.getElementById('formName')
  const formPhone = document.getElementById('formPhone')

  const listHTML =
   `<div class="list__item">
      <div class="item item__name" contenteditable>${formName.value}</div>
      <div class="item item__phone" contenteditable>${formPhone.value}</div>
      <div class="item item__edit">
        <a href="#"><span class="material-icons save">save_alt</span></a>
        <a href="#"><span class="material-icons delete">delete</span></a>
      </div>
    </div>`;

  list.insertAdjacentHTML('beforeEnd', listHTML)

  formName.value = formPhone.value = ''
  formName.focus();
})

// Обработка удаления

list.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    e.target.closest('.list__item').remove();
  }
})


