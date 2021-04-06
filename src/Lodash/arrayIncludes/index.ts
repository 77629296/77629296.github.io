import baseIndexOf from '../baseIndexOf';

function arrayIncludes(array, value) {
  const length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

export default arrayIncludes;
