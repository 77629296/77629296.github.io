import baseXor from '../baseXor';
import isArrayLikeObject from '../isArrayLikeObject';
import last from '../last';

function xorBy(...arrays) {
  let iteratee = last(arrays);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return baseXor(arrays.filter(isArrayLikeObject), iteratee);
}

export default xorBy;
