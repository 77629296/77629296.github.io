import isArrayLike from '../isArrayLike';
import baseForOwn from '../baseForOwn';

function baseEach(collection, iteratee) {
  // 如果传入的为空 或不传值
  if (collection == null) {
    return collection;
  }

  // 如果是非类数组
  if (!isArrayLike(collection)) {
    return baseForOwn(collection, iteratee);
  }

  // 处理类数组
  const length = collection.length;
  const iterable = Object(collection);
  let index = -1;
  while (++index < length) {
    if (iteratee(iterable[index], index, iterable) === false) {
      break;
    }
  }
  return collection;
}
export default baseEach;
