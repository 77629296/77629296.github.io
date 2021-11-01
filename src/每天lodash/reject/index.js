import filter from '../filter';
import filterObject from '../filterObject';
import negate from '../negate';

/**
 * `reject` 可以看作是 `filter` 的反操作。
 * `filter` 会将 `predicate` 返回真值时的元素筛选出来，
 * 但是 `reject` 刚好想反，会将 `predicate` 返回假值时的元素筛选出来。
 */
function reject(collection, predicate) {
  const func = Array.isArray(collection) ? filter : filterObject;
  return func(collection, negate(predicate));
}

export default reject;
