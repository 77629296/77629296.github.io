import baseEach from '../baseEach';
import invoke from '../invoke';
import isArrayLike from '../isArrayLike';

function invokeMap(collection, path, args) {
  let index = -1;
  const isFunc = typeof path === 'function';
  const result = isArrayLike(collection) ? new Array(collection.length) : [];

  baseEach(collection, value => {
    result[index++] = isFunc
      ? path.apply(value, args)
      : invoke(value, path, args);
  });
  return result;
}
export default invokeMap;
