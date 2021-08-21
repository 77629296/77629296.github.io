import isArrayLike from '../isArrayLike';
import baseForOwnRight from '../baseForOwnRight';

function baseEachRight(collection, iteratee) {
  // 如果传入的为空 或不传值
  if (collection == null) {
    return collection;
  }

  // 如果是非类数组
  if (!isArrayLike(collection)) {
    return baseForOwnRight(collection, iteratee);
  }

  // 处理类数组
  const length = collection.length;
  const iterable = Object(collection);
  while (length--) {
    if (iteratee(iterable[length], length, iterable) === false) {
      break;
    }
  }
  return collection;
}
export default baseEachRight;
