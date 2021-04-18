import slice from '../slice';

/**
 *
 * @param {Array} array 要查询的数组
 * @param {number}} n 要去除的元素个数
 * @returns 返回剩余切片
 * _.dropRight([1, 2, 3]); => [1, 2]
 * _.dropRight([1, 2, 3], 2); => [1]
 */
function dropRight(array, n = 1) {
  const length = array == null ? 0 : array.length;
  return length ? slice(array, 0, n < 0 ? 0 : -n) : [];
}

export default dropRight;
