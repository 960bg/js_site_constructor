import { row, col, img, css, inHtmlCode, stringToImg } from '../utils.js';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHtml() {
    throw new Error('Метод toHtml должен быть реализован')
  }
}

class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const { tag = 'h1', styles } = this.options;
    return row(col(inHtmlCode(this.value, styles, tag)));
  }
}

class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const { tag = 'p', styles } = this.options;
    return row(col(inHtmlCode(this.value, styles, tag)));
  }
}


/*  Блок работает с массивом данных, 
если в value= строка то разделитель для массива = "," */
class ColumnsBlock extends Block {
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

    // если пришло изображение тогда 
    // создаем объект для картинки
    // и передаем в ф-ю img для подготовки html кода для картинки
    function StrOrImgToHtml(blockValue) {
      // передали текст а не ссылку на изображение
      if (blockValue.search('http') === -1) {
        // если строка - вернуть ее же
        return blockValue;
      }

      // если изображение
      const image = stringToImg(blockValue, styles);
      return img(image);
    }

    const codeHtml = (blockValue) => inHtmlCode(StrOrImgToHtml(blockValue), styles, tag);
    const html = valueForColumns.map(blockValue => col(codeHtml(blockValue))).join('');

    return row(html);
  }
}

class ImageBlock extends Block {
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