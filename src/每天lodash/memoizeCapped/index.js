import memoize from '../memoize';

const MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  const result = memoize(func, key => {
    const { cache } = result;
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  return result;
}

export default memoizeCapped;
