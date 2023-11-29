import { row, col, img, css, stringToImg } from '../utils.js';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHtml() {
    throw new Error('Метод toHtml должен быть реализован')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const { tag = 'h1', styles } = this.options;
    return row(col(
      `<${tag} style="${css(styles)}">
    ${this.value}
    </${tag}>`));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const { tag = 'p', styles } = this.options;
    return row(col(
      `<${tag} style="${css(styles)}">
    ${this.value}
    </${tag}>`));
  }
}


/*  Блок работает с массивом данных, 
если в value= строка то разделитель для массива = "," */
export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const { tag = 'h1', styles } = this.options;

    // если пришел не массив с колонками а строка 
    // преобразовать строку в массив
    const valueForColumns = (typeof this.value === 'string')
      ? this.value.split(',')
      : this.value;

    // выдать код html
    const inHtml = (blockValue) => `
    <${tag} 
      style="${css(styles)}">
      ${blockValue}
      </${tag}>
     `;

    // если пришло изображение тогда 
    // создаем объект для картинки
    // и передаем в ф-ю img для подготовки html кода для картинки
    function StrOrImgToHtml(blockValue) {
      let isImg = false;
      // флаг что передан не текст а ссылка на изображение
      if (blockValue.search('http') != -1) {
        isImg = true;
      }

      // если изображение
      if (isImg) {
        const image = stringToImg(blockValue, styles);
        return img(image);
      }
      // если строка - вернуть ее же
      return blockValue;
    }

    const html = valueForColumns.map(blockValue => col(inHtml(StrOrImgToHtml(blockValue)))).join('');

    return row(html);
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    return row(img(this));
  }
}

export const Blocks = {
  ImageBlock,
  ColumnsBlock,
  TextBlock,
  TitleBlock,
}