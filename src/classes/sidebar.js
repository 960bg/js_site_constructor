import { createForm } from '../utils';
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
      createForm('TextBlock'),
      createForm('TitleBlock'),
      createForm('ColumnsBlock'),
      createForm('ImageBlock'),
    ].join('');
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
  }
}

