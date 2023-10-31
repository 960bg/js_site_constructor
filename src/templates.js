import { row, col } from './utils.js';


//вставить в html заголовок
function f_title(block) {
  return row(col(block.value));
  //   `<div class="row">
  //   <div class="col-sm">
  //     <h1>${block.value}</h1>
  //   </div>
  // </div>`;
}

//вставить в html текст
function f_text(block) {
  return row(col(block.value));
  //   `<div class="row">
  // <div class="col-sm">
  //   <p>${block.value}</p>
  // </div>
  // </div>`;
}

//вставить в html колонки текста
function f_columns(block) {
  let str = row(block.value.map(item => col(item)).join(''));


  // `<div class="row">`;
  // str += block.value.map(item => `<div class="col-sm"> ${item} </div>`).join('');
  // str += `</div>`;
  return str;
}

//вставить в html картинку
function f_image(block) {
  let str = row(`<img src="${block.value}" />`);


  // `<div class="row">
  // <img src="${block.value}" />
  // </div>`;
  return str;
}


//объект с функциями для вызова без использования циклов
export const templates = {
  f_title: f_title,
  f_text: f_text,
  f_columns: f_columns,
  f_image: f_image,
} 