/**
 * 默认从0开始
 * baseFindIndex([1, 4, 3, 2], val => val > 1) // 1
 * baseFindIndex([1, 4, 3, 2], val => val > 1, true, 3) // 3
 */
function baseFindIndex(array, predicate, fromIndex = 0, fromRight = false) {
  const { length } = array;
  let index = fromIndex + (fromRight ? 1 : -1);

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

export default baseFindIndex;
