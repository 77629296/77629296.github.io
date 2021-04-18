import baseFindIndex from '../baseFindIndex';

function findLastIndex(array, predicate, fromIndex) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  let index = length - 1;
  if (fromIndex !== undefined) {
    index =
      fromIndex < 0
        ? Math.max(length + fromIndex, 0)
        : Math.min(fromIndex, length - 1);
  }
  return baseFindIndex(array, predicate, index, true);
}

export default findLastIndex;
