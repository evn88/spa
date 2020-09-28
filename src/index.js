import {$} from '@core/dom'
import './scss/index.scss'

const app = new $('#app')
app.render()
console.log(app.data())


const button = document.getElementById('addButton')
const list = document.getElementsByClassName('list')
button.onclick = handleButtonClick

function handleButtonClick() {
  const formName = document.getElementById('formName')
  const formPhone = document.getElementById('formPhone')

  console.log('formName', formName.value)
  console.log('formPhone', formPhone.value)

  formName.value = formPhone.value = ''
}

// console.log(list)
for (const item of list) {
  console.log(
      item
  )
}
// for(let i = 0; i < lis)
