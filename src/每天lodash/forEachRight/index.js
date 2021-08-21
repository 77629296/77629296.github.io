import arrayEachRight from '../arrayEachRight';
import baseEachRight from '../baseEachRight';

function forEachRight(collection, iteratee) {
  const func = Array.isArray(collection) ? arrayEachRight : baseEachRight;
  return func(collection, iteratee);
}

export default forEachRight;
