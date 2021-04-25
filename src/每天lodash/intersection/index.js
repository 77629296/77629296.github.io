import baseIntersection from '../baseIntersection';
import map from '../map';
import castArrayLikeObject from '../castArrayLikeObject';

function intersection(...arrays) {
  const mapped = map(arrays, castArrayLikeObject);
  return mapped.length && mapped[0] === arrays[0]
    ? baseIntersection(mapped)
    : [];
}
export default intersection;
