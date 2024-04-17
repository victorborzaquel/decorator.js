"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entity = void 0;
function entity(name) {
    return function (ctr) {
        ctr.prototype._x_decorator_name = name;
    };
}
exports.entity = entity;
//# sourceMappingURL=decorator.js.map