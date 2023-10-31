const model = [
  {
    type: 'title',
    value: 'Hello world from js!',
  },
  {
    type: 'text',
    value: 'text text text js!',
  },
  {
    type: 'columns',
    value: [
      'one',
      'two',
      'three',
      'one',
      'two',
      'three',
      'one',
      'two',
      'three',
      'one',
      'two',
      'three',
    ],
  },
];

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

    case 'columns': {
      html = columns(block);
      console.log(html);
      break;
    }

    default:
      break;
  }


  $site.insertAdjacentHTML('beforeend', html);
});


function title(block) {
  return `<div class="row">
  <div class="col-sm">
    <h1>${block.value}</h1>
  </div>
</div>`;
}


function text(block) {
  return `<div class="row">
<div class="col-sm">
  <p>${block.value}</p>
</div>
</div>`;
}

//
function columns(block) {
  let str = `<div class="row">`;
  str += block.value.map(item => `<div class="col-sm"> ${item} </div>`).join('');
  str += `</div>`;
  return str;
}