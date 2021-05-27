import basePullAt from '../basePullAt';

function remove(array, predicate) {
  const result = [];
  if (!(array != null && array.length)) {
    return result;
  }
  let index = -1;
  const indexes = [];
  const { length } = array;

  while (++index < length) {
    const value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      indexes.push(index);
    }
  }
  basePullAt(array, indexes);
  return result;
}

export default remove;
