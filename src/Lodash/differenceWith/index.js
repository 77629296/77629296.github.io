import baseDifference from '../baseDifference';
import baseFlatten from '../baseFlatten';
import isArrayLikeObject from '../isArrayLikeObject';
import last from '../last';

// var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
// _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);

function differenceWith(array, ...values) {
  let comparator = last(values);
  if (isArrayLikeObject(comparator)) {
    comparator = undefined;
  }
  return isArrayLikeObject(array)
    ? baseDifference(
        array,
        baseFlatten(values, 1, isArrayLikeObject, true),
        undefined,
        comparator,
      )
    : [];
}
export default differenceWith;
