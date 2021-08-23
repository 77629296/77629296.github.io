import baseFlatten from '../baseFlatten';
import map from '../map';

function flatMapDepth(collection, iteratee, depth) {
  depth = depth === undefined ? 1 : +depth;
  return baseFlatten(map(collection, iteratee), depth);
}

export default flatMapDepth;
