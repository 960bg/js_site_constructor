import { block } from '../utils';

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
      block('text'),
      block('title'),
      block('text'),
    ];
  }

  add(event) {
    event.preventDefault();

    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;
    // debugger;
    // return ``;
  }
}

