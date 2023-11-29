import imagePath from './assets/homer.jpg';
import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from './classes/blocks.js';
import { Blocks } from './classes/blocks.js';
// import { img } from './utils.js';
const textCreateBlockHtml = 'HTML страницу формирует JS, исходные данные для блоков записаны в файле model.js.';
// "HTML страницу формирует JS, исходные данные для блоков записаны в файле model.js.";



export const model = [
  new Blocks.TitleBlock('Конструктор сайтов на JS', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '0.7em',
    },
  }),

  new TextBlock(textCreateBlockHtml, {
    tag: 'p',
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      color: '#fff',
      padding: '0.5em',
      'font-weight': 'bold',
    },
  },),

  new ColumnsBlock([
    'файл templates.js - функции обертки в HTML объектов из файла model.js',
    'файл utils.js - функции вызываемые из templates.js',
    'файл blocks.js - классы для объектов блоков из model.js',
  ], {
    tag: 'p',
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      color: '#fff',
      padding: '0.5em',
      'font-weight': 'bold',
    },
  },),

  new ImageBlock(imagePath, {
    tag: 'img',
    alt: 'Картинка Гомер Симпсон',
    styles: {
      width: '150px',
      height: 'auto',
      border: 'solid 5px',
      background: 'linear-gradient(to top, #00e5ff, #4761bf)',
      display: 'flex',
      'justify-content': 'center',
      color: '#fff',
      padding: '0.5em',
    },
  },),

  new ColumnsBlock([
    'Стили: для сетки используется bootstrap.',
    'Стили: остальные стили прописываются в файле model.js для каждого блока в секции styles',
    'HTML страницу формирует JS',
  ],
    {
      tag: 'p',
      styles: {
        background: 'linear-gradient(to right, #00e5ff, #4761bf)',
        color: '#fff',
        padding: '0.5em',
      },
    },)

];


// СТАРАЯ МОДЕЛЬ БЕЗ ИСПОЛЬЗОВАНИЯ КЛАССОВ
// export const model = [
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
// {
//   type: 'f_columns',
//   value: ['Конструктор сайтов на JS',],
//   options: {
//     tag: 'h2',
//     styles: {
//       background: 'linear-gradient(to right, #ff0099, #493240)',
//       color: '#fff',
//       padding: '0.5em',
//     },
//   },
// },
// {
//   type: 'f_text',
//   value: 'text text text js!',
// },
// {
//   type: 'f_columns',
//   value: ['HTML страницу формирует JS',
//     textCreateBlockHtml,],
//   options: {
//     tag: 'p',
//     styles: {
//       background: 'linear-gradient(to right, #ff0099, #493240)',
//       color: '#fff',
//       padding: '0.5em',
//       'font-weight': '600',

//     },
//   }
// },
// {
//   type: 'f_columns',
//   value: [
//     'Стили: для сетки используется bootstrap.',
//     'Стили: остальные стили прописываются в файле model.js для каждого блока в секции styles',
//     'three',
//   ],
//   options: {
//     tag: 'p',
//     styles: {
//       background: 'linear-gradient(to right, #00e5ff, #4761bf)',
//       color: '#fff',
//       padding: '0.5em',
//     },
//   }
// },
// {
//   type: 'f_image',
//   value: imagePath,
//   options: {
//     tag: 'p',
//     alt: 'Картинка Гомер Симпсон',
//     styles: {
//       width: '150px',
//       border: 'solid 5px',
//       background: 'linear-gradient(to top, #00e5ff, #4761bf)',
//       color: '#fff',
//       padding: '0.5em',
//     },
//   },

//   // './src/assets/homer.jfif',
// },];