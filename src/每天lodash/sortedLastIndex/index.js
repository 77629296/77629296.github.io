import baseSortedIndex from '../baseSortedIndex';

function sortedLastIndex(array, value) {
  return baseSortedIndex(array, value, true);
}

export default sortedLastIndex;
