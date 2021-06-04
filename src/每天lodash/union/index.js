import baseFlatten from '../baseFlatten';
import baseUniq from '../baseUniq';
import isArrayLikeObject from '../isArrayLikeObject';

function union(...arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
}

export default union;
