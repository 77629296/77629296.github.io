import baseDifference from '../baseDifference';
import baseFlatten from '../baseFlatten';
import isArrayLikeObject from '../isArrayLikeObject';
import last from '../last';

// _.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
// => [3.1, 1.3]

function differenceBy(array, ...values) {
  let iteratee = last(values);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return isArrayLikeObject(array)
    ? baseDifference(
        array,
        baseFlatten(values, 1, isArrayLikeObject, true),
        iteratee,
      )
    : [];
}
export default differenceBy;
