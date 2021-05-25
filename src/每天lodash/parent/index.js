import baseGet from '../baseGet';
import slice from '../slice';

function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, slice(path, 0, -1));
}
export default parent;
