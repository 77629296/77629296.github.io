import baseUnset from '../baseUnset';
import isIndex from '../isIndex';

function basePullAt(array, indexes) {
  let length = array ? indexes.length : 0;
  const lastIndex = length - 1;

  let previous;
  while (length--) {
    const index = indexes[length];
    if (length === lastIndex || index !== previous) {
      previous = index;
      if (isIndex(index)) {
        array.splice(index, 1);
      } else {
        baseUnset(array, index);
      }
    }
  }
  return array;
}

export default basePullAt;
