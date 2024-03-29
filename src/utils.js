export function row(content) {
  return `<div class="row"> ${content} </div>`;
}

export function col(content) {
  return `<div class="col-sm"> ${content} </div>`;
}

export function img(content) {
  if (content.value)
    return `<img src="${content.value}" style="${css(content.options.styles)}" alt="${content.options.alt}"/>`;
}

export function inHtmlCode(value, styles, tag) {
  const htmlCode = `
    <${tag} style="${css(styles)}">
    ${value}
    </${tag}>
    `;
  return htmlCode;
}



export function css(styles = {}) {
  // если пришла строка - вернем ее же,
  if (typeof styles === 'string') {
    return styles;
  }

  // если пришел объект - преобразование к строке
  const toString = (key) => `${key}: ${styles[key]};`;

  return Object.keys(styles).map(toString).join('');
}

export function createForm(type) {
  return `
  <form name="${type}">
  <h5>${type}</h5>
  <div class="form-group">
    <input class="form-control form-control-sm" type="text" name="value" placeholder="value">
  </div>
  <div class="form-group">
    <input class="form-control form-control-sm" type="text" name="styles" placeholder="styles">
  </div>
  <button class="btn btn-primary btn-sm" type="submit" >Добавить</button>
</form>
<hr>
`;
}

export function stringToImg(value, styles, tag = 'img', alt = 'Картинка') {
  if (typeof value !== 'string') {
    console.log('stringToImg(): ' + 'В параметре должна быть передана строка');
  }
  return {
    value,
    options: {
      tag,
      alt,
      styles,
    }
  }
}

