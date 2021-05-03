import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service inViewport;

  @action watchElement (element) {
    const options = {
        viewportTolerance: {
            bottom: element.className === 'a' ? 0 : 300
        }
    };

    this.inViewport.watchElement(element, options, this.didEnterViewport.bind(this, element.className));
  }

  @action didEnterViewport (className) {
    console.log(`${className} is in viewport`);
  }
}
