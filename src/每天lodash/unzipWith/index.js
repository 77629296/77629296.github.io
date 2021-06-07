import unzip from '../unzip';
import map from '../map';

function unzipWith(array, iteratee) {
  if (!(array != null && array.length)) {
    return [];
  }
  const result = unzip(array);
  return map(result, group => iteratee.apply(undefined, group));
}

export default unzipWith;
