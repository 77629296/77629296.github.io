/**
 * `negate` 函数会对 `predicate` 的结果进行取反，
 * `predicate` 在调用的时候，
 * `this` 会绑定到所创建的函数，并传入对应的参数。
 */
function negate(predicate) {
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function');
  }
  return function(...args) {
    return !predicate.apply(this, args);
  };
}
export default negate;
