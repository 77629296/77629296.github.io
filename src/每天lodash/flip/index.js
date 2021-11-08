function flip(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  return function(...args) {
    return func.apply(this, args.reverse());
  };
}
export default flip;
