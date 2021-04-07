import SetCache from '../SetCache';
import arrayIncludes from '../arrayIncludes';
import arrayIncludesWith from '../arrayIncludesWith';
import map from '../map';

const LARGE_ARRAY_SIZE = 200;
/**
 *
 * @param array 指定数组
 * @param values 目标数组
 * @param iteratee 对目标数组进行修改
 * @param comparator 比较函数
 * @returns
 */
function baseDifference(array, values, iteratee, comparator) {
  let includes = arrayIncludes;
  let isCommon = true;
  const result = [];
  const valuesLength = values.length;

  if (!array.length) {
    return result;
  }
  if (iteratee) {
    values = map(values, value => iteratee(value));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = (cache, key) => cache.has(key);
    isCommon = false;
    values = new SetCache(values);
  }
  outer: for (let value of array) {
    const computed = iteratee == null ? value : iteratee(value);

    value = comparator || value !== 0 ? value : 0;
    if (isCommon && computed === computed) {
      let valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    } else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

export default baseDifference;
