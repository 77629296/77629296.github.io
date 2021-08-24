function baseSortBy(array, comparer) {
  let { length } = array;
  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

export default baseSortBy;
