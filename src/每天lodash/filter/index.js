function filter(array, predicate) {
  let index = -1;
  let resultIndex = 0;

  const length = array == null ? 0 : array.length;
  const result = [];

  while (++index < length) {
    const value = array[index];
    if (predicate(value, index, array)) {
      result[resultIndex++] = value;
    }
  }
  return result;
}

export default filter;
