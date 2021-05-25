import castPath from '../castPath';
import parent from '../parent';
import toKey from '../toKey';
import last from '../last';

function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}
export default baseUnset;
