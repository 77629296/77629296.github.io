import arrayLikeKeys from '../arrayLikeKeys';
import isArrayLike from '../isArrayLike';

function keys(object) {
  return isArrayLike(object)
    ? arrayLikeKeys(object)
    : // 会使用 `Object` 构造函数进行转换，避免传入非 `object` 类型。
      Object.keys(Object(object));
}
export default keys;
