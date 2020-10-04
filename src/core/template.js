export function template(id, name, phone) {
  return `<div class="list__item" id="${id}">
  <div class="item item__name">
    <div class="item form-control" contenteditable>
       ${name}
    </div>
    <span class="error"></span>
  </div>

  <div class="item item__phone">
    <div class="item form-control" contenteditable>
      ${phone}
    </div>
    <span class="error"></span>
  </div>
  ${(phone) ? `
  <div class="item item__edit">
      <a href="#"><span class="material-icons save">save</span></a>
      <a href="#"><span class="material-icons delete">delete</span></a>
  </div>
  `: ``}
</div>`
}
