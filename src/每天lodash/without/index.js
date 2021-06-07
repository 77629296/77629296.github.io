import baseDifference from '../baseDifference';
import isArrayLikeObject from '../isArrayLikeObject';

function without(array, ...values) {
  return isArrayLikeObject(array) ? baseDifference(array, values) : [];
}
export default without;
