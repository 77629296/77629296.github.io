import baseUniq from '../baseUniq';

function uniqBy(array, iteratee) {
  return array != null && array.length ? baseUniq(array, iteratee) : [];
}

export default uniqBy;
