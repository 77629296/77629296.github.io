import baseXor from '../baseXor';
import isArrayLikeObject from '../isArrayLikeObject';
import last from '../last';

function xorWith(...arrays) {
  let comparator = last(arrays);
  if (isArrayLikeObject(comparator)) {
    comparator = undefined;
  }
  return baseXor(arrays.filter(isArrayLikeObject), undefined, comparator);
}

export default xorWith;
