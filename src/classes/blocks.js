import { row, col, img, css } from '../utils.js';

class Block {
  constructor(type, value, options) {
    this.type = type;
    this.value = value;
    this.options = options;
  }

  toHtml() {
    throw new Error('Метод toHtml должен быть реализован')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super('f_title', value, options);
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
    super('f_text', value, options);
  }

  toHtml() {
    return row(col(`<p>${this.value}</p>`));
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super('f_columns', value, options);
  }

  toHtml() {
    const { tag = 'h1', styles } = this.options;

    const inHtml = (blockValue) => `<${tag} 
                                      style="${css(styles)}">
                                      ${blockValue}
                                    </${tag}>`;

    const html = this.value.map(blockValue => col(inHtml(blockValue))).join('');
    return row(html);
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super('f_image', value, options);
  }

  toHtml() {
    return row(img(this));
  }
}
