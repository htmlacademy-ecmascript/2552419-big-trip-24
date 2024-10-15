import { createElement } from '../../render.js';
import { createAllSortTypesTemplate } from './sort-view-components/sort-items-view.js';

const createSortItems = createAllSortTypesTemplate();

export function createSortTemplate() {
  return ` <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            ${createSortItems}
          </form>`;
}

export default class SortView {
  getTemplate() {
    return createSortTemplate();
  }

  getElement(){
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
