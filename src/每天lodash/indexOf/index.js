import baseIndexOf from '../baseIndexOf';

function indexOf(array, value, fromIndex) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  let index = fromIndex == null ? 0 : +fromIndex;
  if (index < 0) {
    index = Math.max(length + index, 0);
  }
  return baseIndexOf(array, value, index);
}

export default indexOf;
