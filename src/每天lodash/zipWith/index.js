import unzipWith from '../unzip';

function zipWith(...arrays) {
  const length = arrays.length;
  let iteratee = length > 1 ? arrays[length - 1] : undefined;
  // 这里运用了逗号运算符的规则
  iteratee =
    typeof iteratee === 'function' ? (arrays.pop(), iteratee) : undefined;
  return unzipWith(arrays, iteratee);
}

export default zipWith;
