import baseAssignValue from '../baseAssignValue';
import reduce from '../reduce';

const hasOwnProperty = Object.prototype.hasOwnProperty;
function groupBy(collection, iteratee) {
  return reduce(
    collection,
    (result, value, key) => {
      key = iteratee(value);
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
      return result;
    },
    {},
  );
}
export default groupBy;
