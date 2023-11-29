//! модуль НЕ ИСПОЛЬЗУЕТСЯ т.к. создана логика на классах вместо объектов
//! модуль НЕ ИСПОЛЬЗУЕТСЯ т.к. создана логика на классах вместо объектов
//! модуль НЕ ИСПОЛЬЗУЕТСЯ т.к. создана логика на классах вместо объектов


import { row, col, img, css } from './utils.js';


//вставить в html заголовок
function f_title(block) {
  const { tag = 'h1', styles } = block.options;
  // const tag = block.options.tag ? block.options.tag : 'h1';
  // const styles = block.options.styles ?? '';
  return row(col(
    `<${tag} style="${css(styles)}">
    ${block.value}
    </${tag}>`));
  //   `<div class="row">
  //   <div class="col-sm">
  //     <h1>${block.value}</h1>
  //   </div>
  // </div>`;
}

//вставить в html текст
function f_text(block) {
  return row(col(`<p>${block.value}</p>`));
  //   `<div class="row">
  // <div class="col-sm">
  //   <p>${block.value}</p>
  // </div>
  // </div>`;
}

//вставить в html колонки текста
function f_columnsOld(block) {
  const html = block.value.map(item => col(item)).join('');
  let str = row(html);


  // `<div class="row">`;
  // str += block.value.map(item => `<div class="col-sm"> ${item} </div>`).join('');
  // str += `</div>`;
  return str;
}

//вставить в html колонки текста
function f_columns(block) {
  const { tag = 'h1', styles } = block.options;

  const toHtml = (value) => `<${tag} style="${css(styles)}">
                  ${value}
                  </${tag}>`;

  const html = block.value.map(value => col(toHtml(value))).join('');
  return row(html);

  // row(col(
  //   `<${tag} style="${css(styles)}">
  //   ${block.value}
  //   </${tag}>`));
  // `<div class="row">`;
  // str += block.value.map(item => `<div class="col-sm"> ${item} </div>`).join('');
  // str += `</div>`;

}

//вставить в html картинку
function f_image(block) {
  return row(img(block));
  // `<div class="row">
  // <img src="${block.value}" />
  // </div>`;

}


//объект с функциями для вызова без использования циклов
export const templates = {
  f_title,
  f_text,
  f_columns,
  f_image,
} 