"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const glob_1 = require("glob");
const path_1 = require("path");
async function main() {
    const paths = await (0, glob_1.glob)((0, path_1.resolve)(__dirname, 'entities/*.js'));
    const x = paths
        .flatMap(path => require(path))
        .flatMap(cla => Object.keys(cla).map(el => cla[el]))
        .filter(cla => { var _a; return !!((_a = cla === null || cla === void 0 ? void 0 : cla.prototype) === null || _a === void 0 ? void 0 : _a._x_decorator_name); })
        .reduce((acc, curr) => ({ ...acc, [curr.prototype._x_decorator_name]: curr }), {});
    if (Object.keys(x)) {
        await (0, promises_1.writeFile)((0, path_1.resolve)(__dirname, '..', '..', 'src', 'types', 'entities.ts'), `export type Entities = ${Object.keys(x)
            .map(el => `'${el}'`)
            .join(' | ')};
`);
    }
    const name = 'first';
    new x[name]().execute();
}
main();
//# sourceMappingURL=index.js.map