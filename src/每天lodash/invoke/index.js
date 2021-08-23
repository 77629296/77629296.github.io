import castPath from '../castPath';
import last from '../last';
import parent from '../parent';
import toKey from '../toKey';

function invoke(object, path, args) {
  path = castPath(path, object);
  object = parent(object, path);
  const func = object == null ? object : object[toKey(last(path))];
  return func == null ? undefined : func.apply(object, args);
}
export default invoke;
