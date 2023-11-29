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

export function css(styles = {}) {
  const toString = (key) => `${key}: ${styles[key]};`;

  return Object.keys(styles).map(toString).join('');
}

export function block(type) {
  return `
  <form name="${type}">
  <h5>${type}</h5>
  <div class="form-group">
    <input class="form-control form-control-sm" type="text" name="value" placeholder="value">
  </div>
  <div class="form-group">
    <input class="form-control form-control-sm" type="text" name="styles" placeholder="value">
  </div>
  <button class="btn btn-primary btn-sm" type="submit" >Добавить</button>
</form>
<hr>
`;
}
