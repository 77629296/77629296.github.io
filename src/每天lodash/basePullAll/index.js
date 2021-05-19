import baseIndexOf from '../baseIndexOf';
import baseIndexOfWith from '../baseIndexOfWith';
import copyArray from '../copyArray';

function basePullAll(array, values, iteratee, comparator) {
  const indexOf = comparator ? baseIndexOfWith : baseIndexOf;
  const length = values.length;

  let index = -1;
  let seen = array;

  // 处理两个数组是同一份引用的情况
  if (array === values) {
    values = copyArray(values);
  }

  // 用迭代器处理原数组
  if (iteratee) {
    seen = map(array, value => iteratee(value));
  }
  while (++index < length) {
    let fromIndex = 0;
    const value = values[index];
    // 存在迭代器 处理待比较值
    const computed = iteratee ? iteratee(value) : value;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      // 遍历的是seen 可能是array或seen
      // 是array时 引用同一地址 移除array中元素即可
      // 不是array时 需移除seen中元素 用于再次遍历
      if (seen !== array) {
        seen.splice(fromIndex, 1);
      }
      array.splice(fromIndex, 1);
    }
  }
  return array;
}

export default basePullAll;
