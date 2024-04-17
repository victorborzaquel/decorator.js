export function entity(name: string) {
  return function (ctr: Function) {
    ctr.prototype._x_decorator_name = name;
  };
}
