import baseFlatten from '../baseFlatten';

function flattenDepth(array, depth) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  depth = depth === undefined ? 1 : +depth;
  return baseFlatten(array, depth);
}

export default flattenDepth;
