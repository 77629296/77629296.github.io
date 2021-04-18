import baseFlatten from '../baseFlatten';

function flattenDeep(array) {
  const length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, INFINITY) : [];
}

export default flattenDeep;
