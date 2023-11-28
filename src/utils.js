export function row(content) {
  return `<div class="row"> ${content} </div>`;
}

export function col(content) {
  return `<div class="col-sm"> ${content} </div>`;
}

export function img(content) {
  if (content.value)
    return `<img src="${content.value}" style="${css(content.options.styles)}" alt="${content.alt}"/>`;
}

export function css(styles = {}) {
  const toString = (key) => `${key}: ${styles[key]};`;

  return Object.keys(styles).map(toString).join('');
}