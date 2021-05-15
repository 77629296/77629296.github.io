import baseFindIndex from '../baseFindIndex';
import baseIsNaN from '../baseIsNaN';
import strictLastIndexOf from '../strictLastIndexOf';

function lastIndexOf(array, value, fromIndex) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }

  let index = length;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index =
      index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1);
  }
  return value === value
    ? strictLastIndexOf(array, value, index)
    : baseFindIndex(array, baseIsNaN, index, true);
}

export default lastIndexOf;
