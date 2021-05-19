import isSymbol from '../isSymbol';

const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  // 数组是可以作为key的 只是这里不允许
  if (Array.isArray(value)) {
    return false;
  }
  const type = typeof value;
  if (
    type === 'number' ||
    type === 'boolean' ||
    value == null ||
    isSymbol(value)
  ) {
    return true;
  }
  // value in Object(object) 支持传入第二个参数自定义
  return (
    reIsPlainProp.test(value) ||
    !reIsDeepProp.test(value) ||
    (object != null && value in Object(object))
  );
}

export default isKey;
