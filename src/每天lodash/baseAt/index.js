import get from '../get';

function baseAt(object, paths) {
  let index = -1;
  const length = paths.length;
  const result = new Array(length);
  const skip = object == null;

  while (++index < length) {
    result[index] = skip ? undefined : get(object, paths[index]);
  }
  return result;
}
export default baseAt;
