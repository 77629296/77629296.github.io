import slice from '../slice';

function take(array, n = 1) {
  if (!(array != null && array.length)) {
    return [];
  }
  return slice(array, 0, n < 0 ? 0 : n);
}
export default take;
