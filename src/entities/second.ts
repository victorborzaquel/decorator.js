import {entity} from '../decorator';

@entity('second')
export class Second {
  execute() {
    console.log('second');
  }
}
