import isIndex from '../isIndex';

function nth(array, n) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return;
  }
  n += n < 0 ? length : 0;
  return isIndex(n, length) ? array[n] : undefined;
}
export default nth;
