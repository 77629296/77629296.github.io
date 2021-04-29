import baseIntersection from '../baseIntersection';
import map from '../map';
import castArrayLikeObject from '../castArrayLikeObject';
import last from '../last';

function intersectionBy(...arrays) {
  let iteratee = last(arrays);
  const mapped = map(arrays, castArrayLikeObject);

  if (iteratee === last(mapped)) {
    iteratee = undefined;
  } else {
    mapped.pop();
  }
  return mapped.length && mapped[0] === arrays[0]
    ? baseIntersection(mapped, iteratee)
    : [];
}
export default intersectionBy;
