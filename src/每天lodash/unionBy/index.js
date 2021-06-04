import baseFlatten from '../baseFlatten';
import baseUniq from '../baseUniq';
import isArrayLikeObject from '../isArrayLikeObject';
import last from '../last';

function unionBy(...arrays) {
  let iteratee = last(arrays);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), iteratee);
}

export default unionBy;
