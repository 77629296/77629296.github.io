import baseSortedUniq from '../baseSortedUniq';

function sortedUniq(array) {
  return array != null && array.length ? baseSortedUniq(array) : [];
}

export default sortedUniq;
