import baseDifference from '../baseDifference';
import baseFlatten from '../baseFlatten';
import baseUniq from '../baseUniq';

function baseXor(arrays, iteratee, comparator) {
  const length = arrays.length;
  if (length < 2) {
    return length ? baseUniq(arrays[0]) : [];
  }
  let index = -1;
  const result = new Array(length);

  // 二维数组遍历
  while (++index < length) {
    const array = arrays[index];
    let othIndex = -1;

    // 获取每个数组 与其他数组的差集 存放到二维数组result中
    while (++othIndex < length) {
      // 仅和其他数组比较
      if (othIndex != index) {
        result[index] = baseDifference(
          result[index] || array,
          arrays[othIndex],
          iteratee,
          comparator,
        );
      }
    }
  }
  return baseUniq(baseFlatten(result, 1), iteratee, comparator);
}

export default baseXor;
