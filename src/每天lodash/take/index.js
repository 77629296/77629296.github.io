import slice from '../slice';

function takeRight(array, n = 1) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = length - n;
  return slice(array, n < 0 ? 0 : n, length);
}
export default takeRight;
