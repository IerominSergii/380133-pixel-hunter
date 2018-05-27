import {AbstractView} from '../abstract-view';
import {createCustomElement} from '../util';

class SingleQuestionView extends AbstractView {
  constractor(options) {
    super();
    this.options = options;
  }

  get template() {}
}
