import {writeFile} from 'fs/promises';
import {glob} from 'glob';
import {resolve} from 'path';
import {Entities} from './types/entities';

async function main() {
  const paths = await glob(resolve(__dirname, 'entities/*.js'));
  const x = paths
    .flatMap(path => require(path))
    .flatMap(cla => Object.keys(cla).map(el => cla[el]))
    .filter(cla => !!cla?.prototype?._x_decorator_name)
    .reduce(
      (acc, curr) => ({...acc, [curr.prototype._x_decorator_name]: curr}),
      {}
    );
  if (Object.keys(x)) {
    await writeFile(
      resolve(__dirname, '..', '..', 'src', 'types', 'entities.ts'),
      `export type Entities = ${Object.keys(x)
        .map(el => `'${el}'`)
        .join(' | ')};
`
    );
  }

  const name: Entities = 'first';
  new x[name]().execute();
}
main();
