function baseForRight(object, iteratee, keysFunc) {
  // 转为对象
  const iterable = Object(object);
  // 获取属性的方法由外部传入
  const props = keysFunc(object);
  let { length } = props;

  while (length--) {
    const key = props[length];
    if (iteratee(iterable[key], key, iterable) === false) {
      break;
    }
  }
  return object;
}
export default baseForRight;
