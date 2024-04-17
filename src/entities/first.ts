import {entity} from '../decorator';

@entity('first')
export class First {
  execute() {
    console.log('first');
  }
}
