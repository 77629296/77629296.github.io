import baseAssignValue from '../baseAssignValue';
import reduce from '../reduce';

function keyBy(collection, iteratee) {
  return reduce(
    collection,
    (result, value, key) => {
      baseAssignValue(result, iteratee(value), value);
      return result;
    },
    {},
  );
}
export default keyBy;
