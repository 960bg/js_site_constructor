import { block } from '../utils';
import { Blocks } from './blocks.js';
import { Site } from './site.js';


export class Sidebar {
  constructor(selector) {
    this.$element = document.querySelector(selector);
    this.init();
  }

  init() {
    this.$element.insertAdjacentHTML('afterbegin', this.template);
    this.$element.addEventListener('submit', this.add);
  }


  get template() {
    return [
      block('TextBlock'),
      block('TitleBlock'),
      block('ColumnsBlock'),
      block('ImageBlock'),
    ];
  }

  add(event) {
    event.preventDefault();

    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;

    // создать блок в html
    const newBlock = new Blocks[type](value, { styles });

    const site = new Site('#site');

    site.render([newBlock]);
    //  this.$element.insertAdjacentHTML('beforeend', block.toHtml());

    const elementList = document.querySelectorAll('form');
    console.log('elementList');
    console.log(elementList);






  }
}

