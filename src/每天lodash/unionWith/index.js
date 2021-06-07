import baseFlatten from '../baseFlatten';
import baseUniq from '../baseUniq';
import isArrayLikeObject from '../isArrayLikeObject';
import last from '../last';

function unionWith(...arrays) {
  let comparator = last(arrays);
  comparator = typeof comparator === 'function' ? comparator : undefined;
  return baseUniq(
    baseFlatten(arrays, 1, isArrayLikeObject, true),
    undefined,
    comparator,
  );
}

export default unionWith;
