function baseIndexOfWith(array, value, fromIndex, comparator) {
  let index = fromIndex - 1;
  const { length } = array;

  while (++index < length) {
    if (comparator(array[index], value)) {
      return index;
    }
  }
  return -1;
}

export default baseIndexOfWith;
