function before(n, func) {
  let result;
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  return function(...args) {
    if (--n > 0) {
      result = func.apply(this, args);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

export default before;
