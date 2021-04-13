import baseDifference from '../baseDifference';
import baseFlatten from '../baseFlatten';
import isArrayLikeObject from '../isArrayLikeObject';

function difference(array, ...values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
}
export default difference;
