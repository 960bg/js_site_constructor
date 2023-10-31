import { model } from './model.js';
// import { title, text, columns, image } from './templates.js';
import { templates } from './templates.js';

const $site = document.querySelector('#site');



console.log(templates['f_title']({ value: 'tddditle' }));


model.forEach(block => {
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
  // проверка что ф-я существует
  if (templates[block.type]) {
    $site.insertAdjacentHTML('beforeend', templates[block.type]({ value: block.data }));
    // html = templates[block.type]({ value: block.data });
  }

  console.log(templates[block.type]({ value: block.data }));

  // switch (block.type) {

  //   case 'title':
  //     html = title(block);
  //     break;

  //   case 'text':
  //     html = text(block);
  //     break;

  //   case 'columns':
  //     html = columns(block);
  //     break;

  //   case 'image':
  //     html = image(block);
  //     break;

  //   default:
  //     break;
  // }


});
