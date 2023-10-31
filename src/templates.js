
//вставить в html заголовок
export function title(block) {
  return `<div class="row">
  <div class="col-sm">
    <h1>${block.value}</h1>
  </div>
</div>`;
}

//вставить в html текст
export function text(block) {
  return `<div class="row">
<div class="col-sm">
  <p>${block.value}</p>
</div>
</div>`;
}

//вставить в html колонки текста
export function columns(block) {
  let str = `<div class="row">`;
  str += block.value.map(item => `<div class="col-sm"> ${item} </div>`).join('');
  str += `</div>`;
  return str;
}

//вставить в html картинку
export function image(block) {
  let str = `<div class="row">
  <img src="${block.value}" />
  </div>`;
  return str;
}