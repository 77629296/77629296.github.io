import baseIntersection from '../baseIntersection';
import map from '../map';
import castArrayLikeObject from '../castArrayLikeObject';
import last from '../last';

function intersectionWith(...arrays) {
  let comparator = last(arrays);
  const mapped = map(arrays, castArrayLikeObject);

  comparator = typeof comparator === 'function' ? comparator : undefined;
  if (comparator) {
    mapped.pop();
  }
  return mapped.length && mapped[0] === arrays[0]
    ? baseIntersection(mapped, undefined, comparator)
    : [];
}
export default intersectionWith;
