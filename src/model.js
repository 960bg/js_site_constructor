import imagePath from './assets/homer.jpg';

const textCreateBlockHtml = 'HTML страницу формирует JS, исходные данные для блоков записаны в файле model.js.';
// "HTML страницу формирует JS, исходные данные для блоков записаны в файле model.js.";



export const model = [
  // {
  //   type: 'f_title',
  //   value: 'Конструктор сайтов на JS',
  //   options: {
  //     tag: 'h2',
  //     styles: {
  //       background: 'linear-gradient(to right, #ff0099, #493240)',
  //       color: '#fff',
  //       padding: '0.5em',
  //     },
  //   }
  // },
  {
    type: 'f_columns',
    value: ['Конструктор сайтов на JS',],
    options: {
      tag: 'h2',
      styles: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        padding: '0.5em',
      },
    },
  },
  // {
  //   type: 'f_text',
  //   value: 'text text text js!',
  // },
  {
    type: 'f_columns',
    value: ['HTML страницу формирует JS',
      textCreateBlockHtml,],
    options: {
      tag: 'p',
      styles: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        padding: '0.5em',
        'font-weight': '600',

      },
    }
  },
  {
    type: 'f_columns',
    value: [
      'Стили: для сетки используется bootstrap.',
      'Стили: остальные стили прописываются в файле model.js для каждого блока в секции styles',
      'three',
    ],
    options: {
      tag: 'p',
      styles: {
        background: 'linear-gradient(to right, #00e5ff, #4761bf)',
        color: '#fff',
        padding: '0.5em',
      },
    }
  },
  {
    type: 'f_image',
    value: imagePath,
    options: {
      tag: 'p',
      styles: {
        width: '150px',
        border: 'solid 5px',
        background: 'linear-gradient(to top, #00e5ff, #4761bf)',
        color: '#fff',
        padding: '0.5em',
      },
    },
    alt: 'Картинка Гомер Симпсон',
    // './src/assets/homer.jfif',
  },
];