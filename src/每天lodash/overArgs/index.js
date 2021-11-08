function overArgs(func, transforms) {
  const funcsLength = transforms.length;
  return function(...args) {
    let index = -1;
    const length = Math.min(args.length, funcsLength);
    while (++index < length) {
      args[index] = transforms[index].call(this, args[index]);
    }
    return func.apply(this, args);
  };
}
export default overArgs;
