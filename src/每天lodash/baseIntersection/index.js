import arrayIncludes from '../arrayIncludes';
import map from '../map';

function baseIntersection(arrays, iteratee) {
  const includes = arrayIncludes;
  const length = arrays[0].length;
  const othLength = arrays.length;
  const result = [];

  let array;
  let maxLength = Infinity;
  let othIndex = othLength;

  // 交集数组以多个数组中 最短的数组限制长度
  while (othIndex--) {
    array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = map(array, value => iteratee(value));
    }
    maxLength = Math.min(array.length, maxLength);
  }

  array = arrays[0];
  let index = -1;

  outer: while (++index < length && result.length < maxLength) {
    let value = array[index]; // 将第一个数组每一项依次取出
    const computed = iteratee ? iteratee(value) : value;

    if (!includes(result, computed)) {
      othIndex = othLength; // 初始化为数组的总长度
      while (--othIndex) {
        // 从后向前遍历传入的数组
        if (!includes(arrays[othIndex], computed)) {
          // 如果这个元素只要不在其中一个数组中，就跳出循环
          continue outer;
        }
      }
      result.push(value);
    }
  }
}

export default baseIntersection;
