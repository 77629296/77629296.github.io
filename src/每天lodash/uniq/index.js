import baseUniq from '../baseUniq';

function uniq(array) {
  return array != null && array.length ? baseUniq(array) : [];
}

export default uniq;
