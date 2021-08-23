import baseFlatten from '../baseFlatten';
import map from '../map';

const INFINITY = 1 / 0;
function flatMapDeep(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), INFINITY);
}

export default flatMapDeep;
