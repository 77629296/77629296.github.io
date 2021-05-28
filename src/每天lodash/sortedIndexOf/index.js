import baseSortedIndex from '../baseSortedIndex';
import eq from '../eq';

function sortedIndexOf(array, value) {
  const length = array == null ? 0 : array.length;
  if (length) {
    const index = baseSortedIndex(array, value);
    if (index < length && eq(array[index], value)) {
      return index;
    }
  }
  return -1;
}

export default sortedIndexOf;
