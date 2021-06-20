import baseAssignValue from '../baseAssignValue';
import eq from '../eq';

const hasOwnProperty = Object.prototype.hasOwnProperty;

function assignValue(object, key, value) {
  const objValue = object[key];

  // 原型链上没有 或者 不相等
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value))) {
    // 因为0===-0 eq不区分正负0 所以这里要判断下
    // value!==0 处理非0时
    // 1 / value === 1 / objValue 过滤0，-0
    if (value !== 0 || 1 / value === 1 / objValue) {
      baseAssignValue(object, key, value);
    }
  } else if (value === undefined && !(key in object)) {
    // 特殊处理undefined
    baseAssignValue(object, key, value);
  }
}

export default assignValue;
