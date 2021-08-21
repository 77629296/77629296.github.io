import findLastIndex from '../findLastIndex';
import isArrayLike from '../isArrayLike';

function findLast(collection, predicate, fromIndex) {
  let iteratee;
  const iterable = Object(collection);

  // 非类数组 特殊处理
  if (!isArrayLike(collection)) {
    collection = Object.keys(collection);
    iteratee = predicate;
    predicate = key => iteratee(iterable[key], key, iterable);
  }

  const index = findLastIndex(collection, predicate, fromIndex);
  return index > -1
    ? iterable[iteratee ? collection[index] : index]
    : undefined;
}

export default findLast;
