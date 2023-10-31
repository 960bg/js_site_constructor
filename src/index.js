import { model } from './model.js';
import { title, text, columns, image } from './templates.js';


const $site = document.querySelector('#site');


model.forEach(block => {
  let html = '';
  switch (block.type) {

    case 'title':
      html = title(block);
      break;

    case 'text':
      html = text(block);
      break;

    case 'columns':
      html = columns(block);
      break;

    case 'image':
      html = image(block);
      break;

    default:
      break;
  }

  $site.insertAdjacentHTML('beforeend', html);
});
