var t,e=globalThis,r={},o={},s=e.parcelRequire5ad8;null==s&&((s=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var s={id:t,exports:{}};return r[t]=s,e.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){o[t]=e},e.parcelRequire5ad8=s),(0,s.register)("27Lyk",function(t,e){Object.defineProperty(t.exports,"register",{get:()=>r,set:t=>r=t,enumerable:!0,configurable:!0});var r,o=new Map;r=function(t,e){for(var r=0;r<e.length-1;r+=2)o.set(e[r],{baseUrl:t,path:e[r+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["7GeUN","index.3093ac92.js","185j8","homer.432f1a35.jpg","TJjPh","index.3ec1d245.css"]'));var n={};function l(t){return`<div class="row"> ${t} </div>`}function a(t){return`<div class="col-sm"> ${t} </div>`}function i(t){if(t.value)return`<img src="${t.value}" style="${u(t.options.styles)}" alt="${t.options.alt}"/>`}function c(t,e,r){let o=`
    <${r} style="${u(e)}">
    ${t}
    </${r}>
    `;return o}function u(t={}){return(// если пришла строка - вернем ее же,
"string"==typeof t?t:Object.keys(t).map(e=>`${e}: ${t[e]};`).join(""))}function d(t){return`
  <form name="${t}">
  <h5>${t}</h5>
  <div class="form-group">
    <input class="form-control form-control-sm" type="text" name="value" placeholder="value">
  </div>
  <div class="form-group">
    <input class="form-control form-control-sm" type="text" name="styles" placeholder="styles">
  </div>
  <button class="btn btn-primary btn-sm" type="submit" >\u{414}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C}</button>
</form>
<hr>
`}n=new URL("homer.432f1a35.jpg",import.meta.url).toString();class m{constructor(t,e){this.value=t,this.options=e}toHtml(){throw Error("Метод toHtml должен быть реализован")}}const f={ImageBlock:class extends m{constructor(t,e){super(t,e)}toHtml(){return l(i(this))}},ColumnsBlock:/*  Блок работает с массивом данных, 
если в value= строка то разделитель для массива = "," */class extends m{constructor(t,e){super(t,e)}toHtml(){let{tag:t="h1",styles:e}=this.options,r="string"==typeof this.value?this.value.split(","):this.value,o=r=>c(// если пришло изображение тогда 
    // создаем объект для картинки
    // и передаем в ф-ю img для подготовки html кода для картинки
    function(t){// передали текст а не ссылку на изображение
    if(-1===t.search("http"))return t;// если изображение
    let r=function(t,e,r="img",o="Картинка"){return"string"!=typeof t&&console.log("stringToImg(): В параметре должна быть передана строка"),{value:t,options:{tag:r,alt:o,styles:e}}}(t,e);return i(r)}(r),e,t),s=r.map(t=>a(o(t))).join("");return l(s)}},TextBlock:class extends m{constructor(t,e){super(t,e)}toHtml(){let{tag:t="p",styles:e}=this.options;return l(a(c(this.value,e,t)))}},TitleBlock:class extends m{constructor(t,e){super(t,e)}toHtml(){let{tag:t="h1",styles:e}=this.options;return l(a(c(this.value,e,t)))}}},p=[new f.TitleBlock("Конструктор сайтов на JS",{tag:"h2",styles:{background:"linear-gradient(to right, #ff0099, #493240)",color:"#fff",padding:"0.7em"}}),new f.TextBlock("HTML страницу формирует JS, исходные данные для блоков записаны в файле model.js.",{tag:"p",styles:{background:"linear-gradient(to left, #f2994a, #f2c94c)",color:"#fff",padding:"0.5em","font-weight":"bold"}}),new f.ColumnsBlock(["файл templates.js - функции обертки в HTML объектов из файла model.js","файл utils.js - функции вызываемые из templates.js","файл blocks.js - классы для объектов блоков из model.js"],{tag:"p",styles:{background:"linear-gradient(to bottom, #8e2de2, #4a00e0)",color:"#fff",padding:"0.5em","font-weight":"bold"}}),new f.ImageBlock((t=n)&&t.__esModule?t.default:t,{tag:"img",alt:"Картинка Гомер Симпсон",styles:{width:"150px",height:"auto",border:"solid 5px",background:"linear-gradient(to top, #00e5ff, #4761bf)",display:"flex","justify-content":"center",color:"#fff",padding:"0.5em"}}),new f.ColumnsBlock(["Стили: для сетки используется bootstrap.","Стили: остальные стили прописываются в файле model.js для каждого блока в секции styles","HTML страницу формирует JS"],{tag:"p",styles:{background:"linear-gradient(to right, #00e5ff, #4761bf)",color:"#fff",padding:"0.5em"}})];// export const model = [
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
class g{constructor(t){this.$element=document.querySelector(t)}render(t){t.forEach(t=>{this.$element.insertAdjacentHTML("beforeend",t.toHtml())})}}const h=new g("#site");h.render(p),new class{constructor(t){this.$element=document.querySelector(t),this.init()}init(){this.$element.insertAdjacentHTML("afterbegin",this.template),this.$element.addEventListener("submit",this.add)}get template(){return[d("TextBlock"),d("TitleBlock"),d("ColumnsBlock"),d("ImageBlock")].join("")}add(t){t.preventDefault();let e=t.target.name,r=t.target.value.value,o=t.target.styles.value,s=new f[e](r,{styles:o}),n=new g("#site");n.render([s])}}("#panel");// --start СТАРАЯ РЕАЛИЗАЦИЯ КЛАССЫ - без использования абстракции класса Site 
// const $site = document.querySelector('#site');
// import { title, text, columns, image } from './templates.js';
// import { templates } from './templates.js';
// import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from './classes/blocks.js';
// для каждого объекта вызываем его метод toHtml() для добавления полей объекта 
// на web-страницу
// model.forEach(block => {
//   $site.insertAdjacentHTML('beforeend', block.toHtml());
// });
// --end СТАРАЯ РЕАЛИЗАЦИЯ КЛАССЫ - без использования абстракции класса Site 
// СТАРАЯ РЕАЛИЗАЦИЯ БЕЗ КЛАССОВ - через объекты
//** */   здесь для каждого block из model импортированного из model.js
//   выполняем функцию из файла templates по переданному
//   параметру - block.type - это ф - я которая вызовится и в качестве параметра 
//   уже для этой функции подставляем значение которое хранится в массиве объектов model
//   т.е.в файле model определена структура массив объектов:
//   массив_объектов = [
//     {
//       тип_обработки: имя_функции_обработки,
//       данные_для_обработки: параметр_для_этойфункции_обработки,
//     },
//     {
//       тип_обработки: имя_функции_обработки,
//       данные_для_обработки: параметр_для_этойфункции_обработки,
//     },
//     {
//       тип_обработки: имя_функции_обработки,
//       данные_для_обработки: параметр_для_этойфункции_обработки,
//     },
//     а в файле templates - определены функции которые мы вызываем 
//     при обращении к массиву_объектов из model.Это всЁ позволяет убрать
//     конструкцию switch...и записать код более коротко,
//   хотя более сложно для понимания
// поэтому запись - templates[block.type]({ value: block.data })
// означает взять соотв - ю функцию из templates по block.type из model и
// передать ей параметр объект { value: block.data } из templates по block.data из model,
//   в функции мы писали именно объект в качестве параметра
// и поле объекта по которому обращаемся там указали value 
// let html = templates[block.type]({ value: block.data });
// model.forEach(block => {
//   // проверка что ф-я существует
//   if (templates[block.type]) {
//     $site.insertAdjacentHTML('beforeend', templates[block.type](block));
//   }
//   console.log(templates[block.type]);
//   // switch (block.type) {
//   //   case 'title':
//   //     html = title(block);
//   //     break;
//   //   case 'text':
//   //     html = text(block);
//   //     break;
//   //   case 'columns':
//   //     html = columns(block);
//   //     break;
//   //   case 'image':
//   //     html = image(block);
//   //     break;
//   //   default:
//   //     break;
//   // }
// });
//# sourceMappingURL=index.3093ac92.js.map

//# sourceMappingURL=index.3093ac92.js.map
